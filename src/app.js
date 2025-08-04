const express = require('express');

const app = express();
const {userAuth} = require('./middleware.js/auth')

//type 4 
app.use("/user",userAuth)

app.use("/admin",(req,res,next)=>{
  console.log("admin");
  res.send("admin call success")  
})
//type 1 middleware
app.use((req,res,next)=>{
  if(req.query.name !== 'arul')
    res.status(401).send("not auth");
  else
    next();
},
(req,res)=>{
  res.send("success call")
})
//type 2 middleware
app.post('/user',(req,res,next)=>{
  if(req.query.name !== 'arul'){  
    res.status(401).send("unautheried user");
  }
  else
  next();
})
app.use("/user",userAuth,
(res,req)=>{
  req.send("success msg send")
})

//type 3
app.use('/user',userAuth, (req,res)=>{
  res.send("success auth")
})

//use all() //path based . not for global level
app.all("/user",(req,res,next)=>{
  if(req.query.name !== 'arul')
    res.status(401).send('unauth from all()')
  else
    next();
  },
(req,res)=>{
    res.send("succes")
})

//

app.use("/user/data",userAuth,
(res,req)=>{
  req.send("success msg send22")
})

app.listen(4000,()=>{
  console.log('response')
})