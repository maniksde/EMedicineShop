const { mongoose } = require("mongoose");
console.log("Mongoose version", mongoose.version);

const studentSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
})

module.exports = mongoose.model("Student",studentSchema );