const express = require("express")
const router = express.Router();

const register = require('./registerCtrl');

router.post("/adduser", register.registerUser)


module.exports = router;