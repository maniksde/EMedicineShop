const Medicine = require("../model/medicine")

exports.getMedicines = async (req,res)=>{
    try{
        const medicines = await Medicine.find()
        res.json(medicines)
    }catch(error){
        res.status(500).json(error)
    }
}

exports.insertMedicine = async(req, res)=>{
    try{
        const medicine = new Medicine(req.body)
        const result = medicine.save()
        res.status(200).json(result)

    }catch(error){
        res.status(500).json(error)
    }
}