const express = require("express");
const router = express.Router();

const User = require('../controller/user.controller');
const LogIn = require('../controller/sign.controller');

router.get('/getUser', User.getUser);
router.post('/createUser', User.createUser);
router.patch('/updateUser', User.updateUser);
router.post('/logIn', LogIn.logIn);
router.get('/profile', User.profile);


module.exports = router