const { mongoose } = require("mongoose");
console.log("Mongoose version", mongoose.version);

const medicineSchema = mongoose.Schema({
    name : { type: String, required: true },
    manufacturer : { type: String, required: true },
    unitPrice : { type: Number, required: true },
    discount : { type: Number, required: true },
    quantity : { type: Number, required: true },
    expDate : { type: Date, required: true },
    imageUrl : { type: String, required: true },
    status : { type: Number, required: true },
   
})

module.exports = mongoose.model("Medicine",medicineSchema);