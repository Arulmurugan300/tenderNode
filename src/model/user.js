const mongoose = require('mongoose');
const validate = require('validator')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    unique: true,
    minLength: 3,
  },
  LastName: {
    type: String,
    trim: true
  },
  emailId: {
    type: String,
    lowercase: true,
    unique: true,
    trim: true,
    maxLength: 40,
    validate: (value) => {
      // if (!value.includes('@gmail.com')) {
      //   throw new Error("Email is not valid")
      // }
      if (!validate.isEmail(value))
        throw new Error("Email is not valid")
    }
  },
  password: {
    type: String,
    minLength: 8,
    validate: (value) => {
      if (!validate.isStrongPassword(value))
        throw new Error("give a strong password like Rock$1234")
    }

  },
  gender: {
    type: String,
    validate: (value) => {
      console.log(value, "valsss");
      // if(value.length >2){
      //   throw new Error("Maximunm 2 inputs only")
      // }
      if (!['male', 'female', 'others'].includes(value)) {
        throw new Error('Give a proper gender ')
      }
    }
  },
  age: {
    type: Number,
    min: 18,
    max: [110, 'Enter your correct age']
  }
}, { timestamps: true });
const User = mongoose.model("User", userSchema);
module.exports = { User }
