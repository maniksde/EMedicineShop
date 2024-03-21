const express = require("express");
const router = express.Router();
//const studentController = require("../controller/student.controller.js");
const userController = require("../controller/user.controller.js");
/*
router.get("/", studentController.readAll)
router.post("/",studentController.insertOne)
*/
router.get("/", userController.readAll)
router.post("/registration",userController.registration)
router.post("/login",userController.login)
module.exports = router;