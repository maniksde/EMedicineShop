const User = require("../model/user.model.js");

exports.readAll = async(req,res) => {
    try{
        //console.log("retrieving data from database", Student);
        const result = await User.find();
        res.json(result);
        console.log(result);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
    
}


exports.registration = async(req,res) => {
    try{
        const user = new User(req.body)
        console.log(user)
        const result = user.save()
        res.send("inserted")
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.login = async(req, res)=>{
    
    try{
        console.log("login function called");
        const u = req.body;
        const result = await User.findOne(req.body);
        
        res.send(result)
    }catch(error){
        console.log("login function called");
        res.status(500).json({ error: error.message });
    }
}

