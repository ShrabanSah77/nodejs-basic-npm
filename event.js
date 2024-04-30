const event = require("events");
const eventTest = new event.EventEmitter();

// create

const sayHello = () => {
  console.log("Hello");
};

// listen

eventTest.on("test", sayHello);

// fire

eventTest.emit("test");

// Question: js function to find tax for add to cart

const calcTax = (product) => {
  // tax % is 10
  // 100
};

const product = {
  name: "mop",
  price: 1000,
  qty: 1,
};
