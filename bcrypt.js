require("dotenv").config();
const bcrypt = require("bcrypt");

const encryptPassword = (password) =>
  bcrypt.hashSync(password, Number(process.env.SALT_ROUND));

const verifypassword = (hashSync, password) =>
  bcrypt.compareSync(password, hashPw);

module.exports = { encryptPassword, verifypassword };
console.log(encryptPassword("Shraban"));
