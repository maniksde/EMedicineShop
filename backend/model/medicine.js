const { mongoose } = require("mongoose");
console.log("Mongoose version", mongoose.version);

const medicineSchema = mongoose.Schema({
    name : { type: String, required: true },
    manufacturer : { type: String, required: true },
    unitprice : { type: Number, required: true },
    discount : { type: Number, required: true },
    quantity : { type: Number, required: true },
    expdate : { type: Date, required: true },
    imageurl : { type: String, required: true },
    status : { type: Number, required: true },
   
})

module.exports = mongoose.model("medicine",medicineSchema);