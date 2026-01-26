
const seriviceUser = require('../services/userService');
const emailService  = require('../config/email');

exports.createUser = async (req, res) => {
  try {
    const userId = await seriviceUser.registerUser(req.body);
    emailService.sendEmail(
    req.body.email,
    "Email Verification OTP",
    `Your OTP is: ${userId.otp}`
    );
    res.status(200).json({ message: "OTP sent to registered email", userId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  console.log("Controller",req.body);
  const user = await seriviceUser.loginUser(req.body);
  if (!user) {
    return res.status(401).json({ message: user });
  }
  
  const { password_hash, ...safeUser } = user;
  res.status(200).json({ message: 'Login successful', safeUser });
}

exports.verifyEmail = async (req, res) => {
  const { email, otp } = req.body;
  console.log("Verify Email Controller:", email, otp);
  try {
    const result = await seriviceUser.verifyEmail(email, otp);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}