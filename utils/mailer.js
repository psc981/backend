const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: parseInt(process.env.SMTP_PORT || "587", 10) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendOTP = async (email, otp) => {
  await transporter.sendMail({
    from: `"Partner Seller Centre" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}. It expires in 5 minutes.`,
    html: `<p>Your OTP code is <b>${otp}</b>. It expires in 5 minutes.</p>`,
  });
};

module.exports = sendOTP;
