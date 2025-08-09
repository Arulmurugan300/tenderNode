const express = require("express");
const router = express.Router();

const User = require('../controller/user.controller');

router.get('/getUser', User.getUser);
router.post('/createUser', User.createUser);
router.patch('/updateUser', User.updateUser);


module.exports = router