const express = require("express");
const expressJwt = require("express-jwt");

const router = express.Router();
const config = require('../config')[process.env.NODE_ENV || "development"];
const register = require('./registerCtrl');
const login = require('./loginCtrl');
const project = require('./projectCtrl');
const user = require('./userCtrl');
const setting = require('./settingsCtrl');
const comment = require('./commentCtrl');
const checkJwt = expressJwt({ secret: config.secret }) // the JWT auth check middleware

router.post("/adduser", checkJwt, register.registerUser)
router.post("/login", login.loginUser)
router.post("/addProject", project.registerProject)
router.put("/updateProject/:projectid", project.updateProject)
router.get("/listAllProjects", checkJwt, project.listAllProjects)
router.get("/listAllEngineers", user.listAllEngineers)
router.post('/addComment', comment.addComment)
router.get("/getComments/:projectid", comment.listAllComments)
router.put("/changepaymentstatus/:statusid/:status", setting.updatePaymentStatus)
router.post("/createpaymentstatus", setting.createPaymentStatus)
router.get("/paymentstatus", setting.getPaymentStatus)
router.get("/getpaymentstatus", setting.checkPaymentStatus)
module.exports = router;