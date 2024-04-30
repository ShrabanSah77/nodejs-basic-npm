const http = require("http");

const { createQr } = require("./modules/qrcode");
const { createPdf } = require("./modules/pdf");
const { sendMail } = require("./modules/mailer");

// const test = async () => {
//   await createQr("https://shraban.com.np");
//   await createPdf("./image.png");
// };
// test();

http
  .createServer(async (req, res) => {
    if (req.url.split("=")[1] !== undefined) {
      await createQr(req.url.split("=")[1]); //shraban.com.np => image data
      await createPdf("./image.png");
      await sendMail(
        "shrabanshah77@gmail.com",
        "PDF attachment",
        "./output.pdf"
      );

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("PDF sent to email.");
    }
  })
  .listen(8000);
// console.log("App running on prt 8000");
console.log("The Server is running at: http://localhost:8000");
