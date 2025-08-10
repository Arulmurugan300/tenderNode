const { User } = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const logIn = async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId });

    if (!user) {
      return res.status(400).send("User not found");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      const jwttoken = await jwt.sign({ _id: user._id }, 'morgan101');
      return res.cookie('access_token', jwttoken, {
        expires: new Date(Date.now() + 60000)
      }).send("logIn successfully");
    }
    else {
      return res.status(400).send("Wrong password");
    }
  }
  catch (err) {
    res.status(500).send("Server error");
  }
}

module.exports.logIn = logIn;