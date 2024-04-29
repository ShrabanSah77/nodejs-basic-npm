require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Shraban sah 👻" <shrabanshah77@gmail.com>', // sender address
    to: "18gietucse193@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Shraban is fucking pycho person?", // plain text body
    html: "<b>Shraban is fucking pycho person?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);


// HomeWork

// 1. Send PDF as attackment
// 2. Send image as HTML Content
