const passport = require('passport'); // npm install passport

const LocalStrategy = require('passport-local').Strategy; // import passport-local Strategy

const User = require('../models/user');

passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email,password,done){
        User.findOne({email:email})
        .catch(err=>{console.log(err);return done(err);})
        .then((user)=>{
            if(!user){
                return done(null,false);
            }
            if(password!=user.password){
                return done(null,false);
            }
            return done(null,user);
        })
    }
))


// serialise the user to decide the key is kept in the cookie

passport.serializeUser(function(user, done) {
    done(null,user.id);
});
  
//deserialise the user from the key in the cookie

passport.deserializeUser(function(id, done) {
    User.findById(id)
    .then(user=>{return done(null,user);})
    .catch(err=>console.log("error in deserializing"))
});

// check if the user is authenticated
passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        next();
    }else{
        return res.redirect('/User/SignIn');
    }
}

passport.setAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

passport.alreadysignedin = function(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }else{
        next();
    }
}

module.exports = passport;