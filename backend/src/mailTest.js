const nodemailer = require("nodemailer");

console.log("nodemailer:", typeof nodemailer);
console.log("createTransport:", typeof nodemailer.createTransport);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "test@gmail.com",
    pass: "testpassword",
  },
});

console.log("transporter:", transporter);
console.log("sendMail:", typeof transporter.sendMail);
