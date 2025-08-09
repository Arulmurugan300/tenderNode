const userAuth = (req,res,next)=>{
  console.log("userauth call");
  
  if(req.query.name !== 'arul'){  
    res.status(401).send("unautheried user");
  }
  else
  next();
}

module.exports = {userAuth}