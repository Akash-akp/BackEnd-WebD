const { render } = require('ejs');
const User = require('../models/user');

module.exports.signUp = (req,res)=>{
    res.render('SignUp',{
        title:"SignUp"
    });
}

module.exports.signIn = (req,res)=>{
    res.render('SignIn',{
        title:"SignIn"
    })
}

module.exports.verified = (req,res)=>{

    if(req.cookies.user_id){

        return res.render('verifiedUser',{
            title:"Verified"
        })
    }else{
        return res.redirect('SignIn')
    }
}

module.exports.create = (req,res) =>{
    if(req.body.password != req.body.repassword){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email})
    .catch((err)=>{ console.log(err); return res.redirect('back');})
    .then((user)=>{
        if(user){
            return res.redirect('back');
        }
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
    
        return res.redirect('SignIn');

    })
}

module.exports.createSession = (req,res) =>{
    User.findOne({email:req.body.email})
    .catch((err)=>{ console.log(err); return res.redirect('back');})
    .then((user)=>{
        if(user.password == req.body.password){
            res.cookie('user_id',user._id);
            return res.redirect('/User/verified');
        }else{
            return res.redirect('back');
        }
    })
}