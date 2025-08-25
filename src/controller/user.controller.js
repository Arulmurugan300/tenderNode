
const { User } = require('../model/user')
const bcrypt = require('bcrypt');
const { signInValidator } = require('../utils/validators')
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
  try {
    const response = await User.find();
    res.send(response);
  }
  catch (err) {
    res.status(400).send("somethig went wrong");
  }
}
module.exports.getUser = getUser;

const createUser = async (req, res) => {
  try {
    signInValidator(req.body);

    const { firstName, lastName, emailId, password } = req.body;
    const encrypt = await bcrypt.hash(password, 10);

    if (encrypt.length == 0) {
      throw new Error("Enter correct password");
    }
    const newUser = new User({ password: encrypt, firstName, emailId, lastName });
    const savedUser = await newUser.save();
    const responseUser = {
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      id: savedUser._id,
      emailId: savedUser.emailId,
      success: "SignIn successfully"
    }
    res.status(201).json(responseUser);
  }
  catch (err) {
    res.status(400).json(err.message)
  }
}

module.exports.createUser = createUser

const updateUser = async (req, res) => {
  try {
    const updateData = req.body;

    const alloedData = ['gender', 'firstName', 'lastName'];
    const isAllowed = Object.keys(updateData).every((key) => {
      console.log(key);

      return alloedData.includes(key)
    })
    if (!isAllowed) {
      throw new Error('"Update Error : Not alloewd to update email')
    }
    await User.findOneAndUpdate({ _id: updateData.id }, updateData, { runValidators: true });
    res.status(201).send("User updated successfully");
  }
  catch (err) {
    res.status(400).send(err.message);
  }
}
module.exports.updateUser = updateUser;

const profile = async (req, res) => {
  try {
    const { access_token } = req?.cookies;

    if (access_token) {
      const decoded = await jwt.verify(access_token, "arul123");
      const { _id } = decoded;

      if (_id) {
        const user = await User.findById({ _id });
        return res.send("cookie succcess" + user);
      }
      else {
        return res.status(404).send("no profile is there")
      }
    }
    else {
      return res.status(404).send("not auth")
    }
  }
  catch (err) {
    res.status(400).send(err.message)
  }
}
module.exports.profile = profile;

const feed = async (req, res) => {
  try {
    const { user } = req;
    if (user) {
      return res.send("cookie succcess" + user);
    }
    else {
      return res.status(404).send("no profile is there")
    }
  }
  catch (err) {
    res.status(400).send(err.message)
  }
}
module.exports.feed = feed;