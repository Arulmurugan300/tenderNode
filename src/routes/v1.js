const express = require("express");
const router = express.Router();

const { userAuth } = require('../middleware.js/auth')
const User = require('../controller/user.controller');
const LogIn = require('../controller/sign.controller');
const List = require('../controller/list.controller');

router.get('/getUser', User.getUser);
router.post('/createUser', User.createUser);
router.patch('/updateUser', User.updateUser);
router.post('/logIn', LogIn.logIn);
router.get('/profile', User.profile);
router.get('/feed', userAuth, User.feed)

router.get('/getAllList', List.getAlLlist);
router.post('/createList', userAuth, List.createList);


module.exports = router