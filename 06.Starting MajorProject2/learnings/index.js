const express = require('express');
const port = 8000;

// connect to server
const db = require('./config/mongoose');
const app = express();

// app use layout
const ExpressLayout = require('express-ejs-layouts');
app.use(ExpressLayout);

// set up view
app.set('view engine','ejs');
app.set('views','./views');

// config routes
app.use('/',require('./routes'));

// calling server
app.listen(port,function(err){
    if(err){
        console.log("Server error",err);
        return;
    }
    console.log("Server is up and running on port: ",port);
})