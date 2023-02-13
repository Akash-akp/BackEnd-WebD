const express = require('express');

// port in which you want to connect
const port = 8000;

// starting your express server
const app = express();

// connecting your routes
app.use('/',require('./routes'));

// set up view engine 
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`)
})