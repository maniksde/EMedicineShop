const dbconfig = require("../config/db.config.js")
const mongoose = require("mongoose")

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbconfig.con_string;

//db.Student = require("./student.model.js")(mongoose);

module.exports = db;