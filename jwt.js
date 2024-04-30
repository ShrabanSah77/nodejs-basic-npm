require("dotenv").config();
const jwt = require("jsonwebtoken");
const createToken = (payload) => jwt.sign(payload, process.env.JWT_KEY);

const verifyToken = (token) => jwt.verify(token, process.env.JWT_KEY);

const token = createToken({ name: "Shraban", role: "admin", emp_id: 1 });

module.exports = {createToken, verifyToken};

const isVarified = verifyToken(token);

console.log(isVarified);
console.log(createToken({ name: "Shraban", role: "admin" }));
