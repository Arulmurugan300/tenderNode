const express = require('express');

const app = express();

app.use('/home',(req,res)=>{
  res.send("Hai Arulmurugan M")
})
app.listen(4000,()=>{
  console.log('response')
})