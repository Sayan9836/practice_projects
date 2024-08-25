
const otp_generator = require('otp-generator');
const filterObj = require('../filterObj');
const { User } = require('../model/User');
const { Admin } = require('../model/User');
const nodemailer = require('nodemailer');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = '#Sayan@2002'
const signToken = (user_id) => JWT.sign({ user_id }, JWT_SECRET);

module.exports.UserRegistration = async (req, res, next) => {

    const filteredBody = filterObj(req.body, "firstName", "lastName", "email", "password")

    const { firstName, lastName, email, password } = filteredBody;

    if (!email || (!firstName) || (!lastName) || (!password)) {

        return res.status(400).json({
            status: 'error',
            message: ' All feilds are required'
        })
    }


    const existing_user = await User.findOne({ email: email });

    if (existing_user && existing_user.verified) {

        return res.status(500).json({
            status: 'error',
            message: 'user with same emailId already exists and Verified Please Login to Proceed!'
        })

    }

    if (existing_user) {

        const updated_user = await existing_user.findOneAndUpdate({ email: email }, filteredBody, {
            new: true,
            validateModifiedOnly: true,
        })

        req.user_id = updated_user._id;

        next();
    }

    const new_user = await User.create(filteredBody);

    req.user_id = new_user._id;

    next();
}

module.exports.sendOTP = async (req, res, next) => {

    const { user_id } = req
    console.log(user_id);

    const new_otp = otp_generator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false
    })

    console.log(new_otp);


    const otp_expiring_time = Date.now() * 10 * 60 * 1000;

    const current_user = await User.findByIdAndUpdate(user_id, {
        otp_expiring_time: otp_expiring_time,
        otp: String(new_otp)
    })

    await current_user?.save({ new: true, validateModifiedOnly: true })

    console.log(current_user);


    // send OTP to user email

    try {

        const transporter = nodemailer.createTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sayanearnings209@gmail.com',
                password: 'Sayan@1234'
            }
        })


        const mailOptions = {
            from: 'sayanearnings209@gmail.com',
            to: `${current_user?.email}`,
            subject: 'Your OTP for ecom_node is',
            text: `Your OTP is ${new_otp}`
        }


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('email sending failed', error)
            } else {
                console.log('Email sent Successfully', info.response);
            }
        })

    } catch (error) {

        res.status(500).json({
            status: 'error',
            message: 'OTP sending failed please try again Later!'
        })

    }

    res.status(200).json({
        status: "success",
        message: "OTP Sent Successfully!",
    });

}


module.exports.verifyOTP = async (req, res) => {

    const { email, otp } = req.body;

    const existing_user = await User.findOne({ email: email });

    if (!existing_user) {
        res.status(400).json({
            status: 'error',
            message: 'No User Found with this Email'
        })
    }

    if (existing_user.otp_expiring_time < Number(Date.now())) {
        res.status(500).json({
            status: 'error',
            message: 'OTP expires'
        })
    }

    if (!(await verifyOTP(otp, existing_user.otp))) {
        res.status(501).json({
            status: 'error',
            message: 'Invalid OTP'
        })
    }

}

module.exports.UserLogin = async (req, res) => {

    const { email, password } = req.body;

    if (!email || (!password)) {

        res.json(({
            status: 'error',
            message: 'Both Email and Password are required'
        }))

    }

    const user_exists = await User.findOne({ email: email }).select("+password");

    if (!user_exists) {

        res.status(400).json({
            status: 'error',
            message: 'No Existing User Found Please Create a account to continue!'
        })
    }


    if (user_exists && (!User.verified)) {
        res.status(400).json({
            status: 'error',
            message: 'Your Email is not Verified Please Verify Your Email to Login!'
        })
    }


    if (!(await User.correctPassword(password, user_exists.password))) {
        res.status(400).json({
            status: 'error',
            message: 'Please Enter Correct Password!'
        })
    }


    const token = signToken(user_exists._id);

    res.status(200).json({
        status: 'Success',
        message: 'Login Successfull',
        token,
    })

}





module.exports.forgotPassword = async (req, res) => {

}

module.exports.resetPassword = async (req, res) => {

}

module.exports.UpdatePassword = async (req, res) => {

}






/////////////////////////////////////////////////////

module.exports.AdminLogin = async (req, res) => {

    const { password } = req.body;

    if (!password) {
        res.status(400).json({
            status: "error",
            message: 'Password is required',
        })
    }

    const admin = await Admin.findOne({ password });

    if (!admin) {
        res.status(500).json({
            status: "error",
            message: "no admin found",
        })
    }


    if (!bcrypt.Admin.correctPassword(password, admin.password)) {

        res.status(505).json({
            status: "error",
            message: "Invalid password",
        })
    }

    const token = signToken(admin._id);

    res.status(200).json({
        status: 'successfull',
        message: 'Admin Login Successfull',
        token,
    })

}
