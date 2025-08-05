const express = require('express');
const { User } = require('./model/user')
const app = express();
const { connectDB } = require('./config/dataBase')
// error handling wrong way
app.use(express.json())

app.get('/getUser', async (req, res) => {
  if (req.query.emailId) {
    const email = req.query.emailId;
    
    try {
      const user = await User.findOne({ emailId: email });
      console.log(user);
      if (user) {
        res.send(user);
      }
      else {
        res.status(400).send("not matching data");
      }
    }
    catch {
      res.status(400).send("something went wrong");
    }
  }
  else {
  res.status(400).send("Invalid Input")
}
})


//signup call (post call using post man)
app.post('/signIn', async (req, res, next) => {
  const user = req.body
  console.log(user, "userdata");

  try {
    const newUser = new User(user);
    console.log(newUser, "user1");

    await newUser.save();
    res.send("successfully added")
  }
  catch {
    res.send("error in your request")
  }
})


connectDB().then((res) => {
  console.log("DB sync successfully...");
  app.listen(4000, () => {
    console.log('response')
  })
})
  .catch((err) => {
    console.log("DB not sync correctly");

  })

