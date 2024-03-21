const express = require("express");
const { mongoose } = require("mongoose");
const route = require("./routes/route.js");

const app = express();
const PORT = 8000;

//mongoose.connect('mongodb://localhost:27017/student_db');
mongoose.connect('mongodb://localhost:27017/emedicine');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:3000"
  };
  
app.use(cors(corsOptions));

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