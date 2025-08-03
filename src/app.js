const express = require('express');

const app = express();

app.get("/user",(req,res)=>{
  res.send({firstName:"Arulmurugan",Role:"Software Engineer"})
})

app.post("/user",(req,res)=>{
  if(req){
    console.log("req.param",req.query);
    res.send("success")
  }
})

app.patch("/user",(req,res)=>{
  res.send("patch success")
})

app.delete("/user",(req,res)=>{
  res.send("deleted successfully")
})

app.use('/home',(req,res)=>{
  res.send("Hai Arulmurugan M")
})

app.listen(4000,()=>{
  console.log('response')
})