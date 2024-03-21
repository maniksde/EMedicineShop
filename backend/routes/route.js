const express = require("express");
const router = express.Router();
//const studentController = require("../controller/student.controller.js");
const userController = require("../controller/user.controller.js");
const medicineController = require("../controller/medicine.controller")
/*
router.get("/", studentController.readAll)
router.post("/",studentController.insertOne)
*/
router.get("/", userController.readAll)
router.post("/registration",userController.registration)
router.post("/login",userController.login)
router.post("/addMedicine", medicineController.insertMedicine)
router.get("/medicineList",medicineController.getMedicines)
module.exports = router;