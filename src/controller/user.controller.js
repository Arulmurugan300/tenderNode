
const { User } = require('../model/user')

const getUser = async (req, res) => {
  try {
    const response = await User.find();
    console.log(response, "res1111")
    res.send(response);
  }
  catch (err) {
    res.status(400).send("somethig went wrong");
  }
}
module.exports.getUser = getUser;

const createUser = async (req, res) => {
  try {

    console.log(req.body);
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  }
  catch (err) {
    console.log('errrrrrr', err.message, "errrsss")
    res.status(400).send(err.message)
  }
}

module.exports.createUser = createUser

const updateUser = async (req, res) => {
  try {
    const updateData = req.body;
    console.log(updateData, "asas");

    const alloedData = ['age', 'gender', 'password', 'firstName', 'LastName', 'id'];
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