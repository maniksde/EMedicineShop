const { mongoose } = require("mongoose");
console.log("Mongoose version", mongoose.version);

const cartSchema = mongoose.Schema({
    email: { type: String, required: true },
    imageurl: { type: String, required: true },
    medicinename: { type: String, required: true },
    unitprice: { type: Number, required: true },
    discount: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalprice: { type: Number, required: true },
    medicineid: { type: Number, required: true },
})

module.exports = mongoose.model("cart",cartSchema );
