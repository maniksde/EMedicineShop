
const Student = require('../model/student.model.js')
/*
const db = require("../model/index");
console.log(Student);

console.log(db.url, "db url")
db.mongoose
    .connect(db.url)
    .then(()=>{
        console.log("Connected with Database ")
    })
    .catch( err => {
        console.log("not connected", err);
        process.exit();
    });
*/
exports.readAll = async(req,res) => {
    try{
        console.log("retrieving data from database", Student);
        const result = await Student.find();
        res.json(result);
        console.log(result);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
    
}

exports.insertOne = async(req,res) => {
    try{
        const st = new Student(req.body)
        const result = st.save()
        res.send("inserted")
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

