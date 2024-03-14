const studentModel = require('../model/student.model.js');

exports.getStudentController = (req,res) => {
    const students = studentModel.getStudent();
    res.send(students);
}
