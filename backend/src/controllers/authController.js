
const seriviceUser = require('../services/userService');

exports.createUser = async (req, res) => {
  const userId = await seriviceUser.registerUser(req.body);
  res.status(201).json({ message: 'User created', userId });
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