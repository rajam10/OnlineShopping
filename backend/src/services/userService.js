const userRepo = require('../respository/userRepo');
const bcrypt = require('bcrypt');

const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const hashPassword = async (plainPassword) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
};

exports.registerUser = async (data) => {
  try {
    const hashedPassword = await hashPassword(data.password);
    const otp = generateOtp();
    const hashedotp = await hashPassword(otp);
    data.otp_hash = hashedotp;
    data.purpose = 'EMAIL_VERIFICATION';
    data.expires_at = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now
    data.password = hashedPassword;
    const userId = await userRepo.createUser(data);
    userId.otp = otp;
    return userId;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.loginUser = async (data) => {
  console.log("Service",data);
  const user = await userRepo.loginUser(data);
  console.log("Service User",user);
  if (!user) {
    return "User not found";
  }else{
    const isPasswordValid = await bcrypt.compare(data.password, user.password_hash);
    if (!isPasswordValid) {
      return "Invalid Credentials";
    }
  }
  return user;
}

exports.verifyEmail = async (email, otp) => {
  const user = await userRepo.getUserById(email);
  console.log("User for OTP verification:", user);
  if (!user) {
    throw new Error('User not found');
  }
  const otpRecord = await userRepo.getOtpRecord(user.id, 'EMAIL_VERIFICATION');
  console.log("OTP Record:", otpRecord);
  if (!otpRecord) {
    throw new Error('OTP record not found');
  }
  if (otpRecord.is_used) {
    throw new Error('OTP has already been used');
  }
  if (new Date() > new Date(otpRecord.expires_at)) {
    throw new Error('OTP has expired');
  }
  const isOtpValid = await bcrypt.compare(otp, otpRecord.otp_hash);
  console.log("Is OTP valid:", isOtpValid);
  if (!isOtpValid) {
    throw new Error('Invalid OTP');
  }
  const result = await userRepo.markOtpAsUsed(user.id);
  console.log("OTP marked as used:", result);
  if(result)
  return 'Email verified successfully';
  else
  throw new Error('Failed to verify email');
}
