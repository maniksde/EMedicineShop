const { mongoose } = require("mongoose");
console.log("Mongoose version", mongoose.version);

const userSchema = mongoose.Schema({
    
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    fund: { type: Number, required: true },
    type: { type: String, required: true },
    status: { type: Number, required: true }
})

module.exports = mongoose.model("User",userSchema );

