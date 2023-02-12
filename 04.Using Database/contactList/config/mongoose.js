// require the library
const mongoose = require('mongoose');
// connect to the database
// mongoose.connect('mongodb://localhost:27017');
// mongoose.set('strictQuery', true);

// main().catch(err => console.log(err));

async function main(){
    mongoose.connect('mongodb://localhost/test');
}

main().catch(err=>console.log("error"))

// aquire the connection of database(to check if it is sucessful)
const db = mongoose.connection;

// error
db.on('error',console.error.bind(console,"error connecting to db"));


// up and running then print the message
db.once('open',function(){
    console.log('Successfully connecting to the database');
});


