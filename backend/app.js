const express = require("express");
const route = require("./routes/route.js");
const app = express();
const PORT = 3000;
app.use("/",route);

const start = async()=> {
    try{
        app.listen(PORT, ()=>{
            console.log(`connected with port ${PORT}`);
        });
    }catch(err){
        console.log(err);
    }
}

start();