const express = require("express");
const cookieParser = require("cookie-parser");
const port = 8000;

// contect to server
const db = require('./config/mongoose');
const app = express();

app.use(express.urlencoded());
app.use(cookieParser());

// app use layout
const ExpressLayout = require('express-ejs-layouts');
const { urlencoded } = require("express");
app.use(ExpressLayout);

// set up view 
app.set('view engine','ejs');
app.set('views','./views');

// connect home.ejs with css and js file
app.use(express.static('./assets'));

// extract style and script from subpage into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// config routes
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("server error",err);
    }
    console.log("Server is running on the port: ",port);
})