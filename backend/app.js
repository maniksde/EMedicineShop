const express = require("express");
const route = require("./routes/route.js");
const app = express();

app.use("/",route);

app.listen(3000, ()=>{
    console.log("ok");
});