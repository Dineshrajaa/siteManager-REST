const express = require("express")
const router = express.Router();

const register = require('./registerCtrl');
const login = require('./loginCtrl');

router.post("/adduser", register.registerUser)
router.post("/login", login.loginUser)


module.exports = router;