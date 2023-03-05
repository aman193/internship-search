const nodemailer = require("nodemailer");
const { email, password } = require("./dev");

exports.nodeMailer = (mailOptions) => {
  // Create a transporter object
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });

  console.log(mailOptions);

  // Send the email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
