const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const { connectDB } = require('./config/dataBase')
const v1 = require('./routes/v1');

app.use(express.json());
app.use(cookieParser());

app.use('/v1', v1);

connectDB().then((res) => {
  console.log("DB sync successfully...");
  app.listen(4000, () => {
    console.log('response')
  })
})
  .catch((err) => {
    console.log("DB not sync correctly");
  })

