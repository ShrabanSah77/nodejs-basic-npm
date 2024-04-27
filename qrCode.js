const QRCode = require("qrcode");
const http = require("http");

http
  .createServer(async (req, res) => {
    console.log(req.url);
    const qr = await QRCode.toDataURL("https://github.com/ShrabanSah77");
    const imgSrc = `<img src="${qr}"/>`;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(imgSrc);
  })
  .listen(5000);
console.log("App running on http://localhost:5000");
