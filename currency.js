// Create a http server that takes user input as
// request and find a package that can convert user
// input to currency

//1USD => 133 NPR

const http = require("http");
const CC = require("currency-converter-lt");

http
  .createServer(async (req, res) => {
    const url = req.url.split("="); // localhost:8080?currency=75
    const number = Number(url[1]); //number // parseInt(URL[1])
    const convert = await multiplyCurrency(number);

    res.writeHead(200, { "content-Type": "text/html" });
    const string = `<p> The Converted Currency will be: NPR ${convert}`;
    res.end(string);
  })
  .listen(8080);

console.log("The Server is running at: http://localhost:8080");
const multiplyCurrency = async (number = 0) => {
  let currencyConverter = new CC({ from: "USD", to: "NPR", amount: number });
  const result = await currencyConverter.convert();
  return result;
};
