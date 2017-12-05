const express = require("express")
const router = express.Router();

const register = require('./registerCtrl');
const login = require('./loginCtrl');
const project = require('./projectCtrl');
const user = require('./userCtrl');
const comment = require('./commentCtrl');
router.post("/adduser", register.registerUser)
router.post("/login", login.loginUser)
router.post("/addProject", project.registerProject)
router.get("/listAllProjects", project.listAllProjects)
router.get("/listAllEngineers", user.listAllEngineers)
router.post('/addComment', comment.addComment)
router.get("/getComments/:projectid", comment.listAllComments)
module.exports = router;