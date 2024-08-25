const router = require("express").Router();

const { UserRegistration, sendOTP, AdminLogin } = require("../controller/auth");

router.post("/register", UserRegistration);
router.post("/sent-otp", sendOTP);
// router.post('/login', UserLogin);
// router.post('/verify-otp', verifyOTP);
// router.post('/forgot-password', forgotPassword);
// router.post('/reset-password', resetPassword);
router.post("/admin/dashboard", AdminLogin);

module.exports = router;
