const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;




const adminSchema = new mongoose.Schema({

    username: {
        type: String,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: [true, "password is required"],
    }

})


const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "firstName is required"],
    },

    lastName: {
        type: String,
        required: [true, "lastName is required"],
    },

    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: `{VALUE} is not a valid email address`
        },
        set: (email) => String(email).toLowerCase(),
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: (value) => {
                const isLengthValid = validator.isLength(value, { min: 8 })
                const isFormatValid = validator.matches(value, passwordPattern)

                if (!isLengthValid) {
                    throw new Error('Password must be of 8 characters long ')
                }

                if (!isFormatValid) {
                    throw new Error('Password must contain at least one lowerCase one upperCase one number and one special character')
                }

                return true;
            },
        }
    },

    isAdmin: {
        type: 'Boolean',
        default: false,
    },

    registrationTime: {
        type: Date,
        default: Date.now(),
    },

    watchList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],

    verified: {
        type: Boolean,
        default: false,
    },

    otp: {
        type: String,
    },

    otp_expiring_time: {
        type: Number,
    }

})


userSchema.pre('save', async function (next) {

    if (!this.password || (!this.isModified("password"))) {
        next();
    }

    const salt = bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password, salt);
    next();
})

userSchema.pre('save', async function (next) {

    if (!this.otp || (!this.isModified("otp"))) {
        next();
    }

    const salt = bcrypt.genSalt(10);
    this.otp = bcrypt.hash(this.otp, salt);
    next();
})

userSchema.methods.correctPassword = async function (requesting_user_password, stored_user_password) {

    return await bcrypt.compare(requesting_user_password, stored_user_password);

}

adminSchema.methods.correctPassword = async function (requesting_admin_password, stored_admin_password) {

    return await bcrypt.compare(requesting_admin_password, stored_admin_password);
}


userSchema.methods.verifyOTP = async function (requesting_user_otp, stored_user_otp) {

    return await bcrypt.compare(requesting_user_otp, stored_user_otp);
}


const User = mongoose.model('Users', userSchema);
const Admin = mongoose.model('Admin', adminSchema);

module.exports = { User, Admin };

