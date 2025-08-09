const mongoose = require('mongoose');

const signIn = new mongoose.Schema({
  emailId: {
    type: String
  },
  Password: {
    type: String
  }
}, { timestamps: true })
const SignIn = mongoose.model('SignIn', signIn);
module.exports = { SignIn }