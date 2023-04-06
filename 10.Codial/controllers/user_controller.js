const User = require('../models/user');

module.exports.SignIn = (req,res)=>{
    return res.render('SignIn',{
        title: "SignIn"
    })
}

module.exports.SignUp = (req,res)=>{
    return res.render('SignUp',{
        title: "SignUp"
    })
}

module.exports.verified = (req,res)=>{
    return res.render('verifiedUser',{
        title:"Verified"
    })

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

module.exports.createSession = (req,res)=>{
    return res.redirect('/User/verified');
}

module.exports.destroy = (req,res)=>{
    req.logout(function(err){
        if(err){return next(err);}
        return res.redirect('/');
    });
}