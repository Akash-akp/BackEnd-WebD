// npm install node
const express = require('express'); // npm install express
const port = 8000; // port in which server is called
const Expresslayout = require('express-ejs-layouts'); // npm install express-ejs-layouts
const cookieParser = require('cookie-parser'); // npm install cookie-parser
const session = require('express-session'); // npm install express-session // used for session cookie
const passport = require('passport'); // npm install passport
const passportLocal = require('./config/passport-local-strategy') // npm install passport-local

// connect database
const db = require('./config/mongoose.js') // npm install mongoose

const app = express(); // server


// setup views
app.set('view engine','ejs'); // npm install ejs
app.set('views','./views'); // view handle all the visuals
// Layout used ...
app.use(Expresslayout);
// extract style and script from subpage into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// config css and js file to assets
app.use(express.static('./assets'));

app.use(express.urlencoded()); // middleware -- bodyParser

app.use(session({
    name: "Website",
    secret: "_secret",
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge:(1000*60*100)
    }
}))

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthentication);

//config routes
app.use('/',require('./routes'));


app.listen(port,function(err){ // server is called
    if(err){
        console.log("Error in server");
        return;
    }
    console.log("Server is running on port:",port);
})


// npm install node && npm install express && mongoose && npm install ejs && npm install express-ejs-layouts && npm install cookie-parser && npm install passport && npm install passport-local && npm install express-session