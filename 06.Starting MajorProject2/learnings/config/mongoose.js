const mongoose = require('mongoose');

async function main(){
    mongoose.connect('mongodb://localhost:27017');
}

main().catch((err)=>console.log("error in connecting databs"));

db = mongoose.connection;

db.on('error',(err)=>console.log("Database error"));

db.once('open',()=>{console.log("Successfully connected to database")})

module.exports = db;