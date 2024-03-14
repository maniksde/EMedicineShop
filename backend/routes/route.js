const express = require("express");
const router = express.Router();
const studentController = require("../controller/student.controller.js");

router.get("/", (req,res) => {
    return studentController.getStudentController(req,res);
})

module.exports = router;