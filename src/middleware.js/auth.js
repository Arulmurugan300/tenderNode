const jwt = require('jsonwebtoken');
const { User } = require('../model/user')
const userAuth = async (req, res, next) => {
  try {
    const { access_token } = req.cookies;

    if (access_token) {
      const decrypt = await jwt.verify(access_token, 'morgan101');
      const { _id } = decrypt;
      const user = await User.findById({ _id });
      req.user = user;
      if (!user) {
        throw new Error("user not valid");
      }
      next();
    }
    else {
      throw new Error("not a valid user")
    }
  }
  catch (err) {
    res.status(400).send("Error:" + err.message);
  }
}

module.exports = { userAuth }