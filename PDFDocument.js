const http = require("http");
const PDFDocument = require("pdfkit");
const fs = require("fs");

http
  .createServer((req, res) => {
    const url = req.url.split("="); // localhost:8080? PDFConverter.
    const text = url[1]; // number
    if (req.url.split("=")[1] !== undefined) {
      createPdf(text);
    }

    res.writeHead(200, { "content-Type": "text/html" });
    res.end("Pdf generated");
  })
  .listen(8080);

const createPdf = (userInput) => {
  // create a document
  const doc = new PDFDocument();
  console.log({ userInput });

  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.text(userInput, 100, 100);
  doc.end();
};

console.log("The Server is running at: http://localhost:8080");
