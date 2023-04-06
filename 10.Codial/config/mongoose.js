const mongoose = require('mongoose'); // npm install mongoose

async function main(){  // promise for connecting to server
    mongoose.connect('mongodb://localhost:27017/codial'); // connect to local server
}

main().catch(err=> console.log(error)); // if promise is failed

const db = mongoose.connection; // database connections

db.on('error',err=>console.log("error in connecting to the database")); // if there is error in connecting to server

db.once('open',()=>console.log("connected to database")); // server successfully connected