const validator = require('validator');

const signInValidator = (req) => {
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