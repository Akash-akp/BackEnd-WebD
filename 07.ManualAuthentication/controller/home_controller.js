module.exports.home = (req,res)=>{
    res.render('home',{
        title: "Home"
    });
}

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
    res.render('verifiedUser',{
        title:"Verified"
    })
}