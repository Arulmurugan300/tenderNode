const express = require('express');

const app = express();
// error handling wrong way
app.use('/',(err,req,res,next)=>{
  if(err){
    res.send("error da arull")
  }
})
app.use('/user',(req,res)=>{
  throw new Error("error");
  res.send("success");
})

//error handling correct way
app.use('/user',(req,res)=>{
  throw new Error("error pa")
  res.send("success")
})

app.use('/',(err,req,res,next)=>{
  if(err){
    res.send("error da arull")
  }
})



//type 2  always best practice for error handling
app.use('/user',(req,res,next)=>{
  try{
    throw new Error("error da arullll");
  }
  catch(err){
    res.send("error:");
  }
})

app.listen(4000,()=>{
  console.log('response')
})