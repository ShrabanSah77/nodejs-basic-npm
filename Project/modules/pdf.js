const PDFDocument = require("pdfkit");
const fs = require("fs");

const createPdf = async (image) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("output.pdf"));
  await doc.image(image, {
    fit: [250, 300],
    align: "center",
    valign: "center",
  });

  doc.end();
};

module.exports = { createPdf };
