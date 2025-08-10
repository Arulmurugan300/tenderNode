const validator = require('validator');

const signInValidator = (req) => {
  console.log("100011111", validator.isEmail(req.emailId), !validator.isStrongPassword(req.password))
  if (!validator.isEmail(req.emailId)) {
    throw new Error("Enter valid email");
  }
  if (!validator.isStrongPassword(req.password)) {
    throw new Error("Enter strong Password");
  }
  if (req.firstName.length < 4) {
    throw new Error("Name should have minimum 4 letters.")
  }
}
module.exports = { signInValidator };