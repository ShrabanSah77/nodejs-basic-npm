const nodemailer = require("nodemailer");
const WebTransportError = nodemailer.createTransport({
  host: "smpt.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "Shraban",
    pass: "Hero",
  },
});

const sendMail = async({ to, subject, content}) => {
    const info = await WebTransportError.sendMail({
        from: "shraban Sah", "<shrabanshah77@gmail.com>": // sender address
        subject, // subject line
        attachments:[
            {
            // send single file(pdf, text, html)
            filename:"output.pdf",
            path:content,
            cid:"image",
        },
        ],
    });
    console.log("Message sent: %s", info.messageId);
};

module.exports = {sendMail};