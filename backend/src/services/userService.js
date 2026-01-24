const userRepo = require('../respository/userRepo');
const bcrypt = require('bcrypt');

const hashPassword = async (plainPassword) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
};

exports.registerUser = async (data) => {
  const hashedPassword = await hashPassword(data.password);
  data.password = hashedPassword;
  const userId = await userRepo.createUser(data);
  return userId;
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