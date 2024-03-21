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

module.exports = router;