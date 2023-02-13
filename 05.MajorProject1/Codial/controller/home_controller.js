module.exports.home = function(req,res){
    // return res.end("<h1>My Name is Akash</h1");
    return res.render('home',{
        title : "Home"
    });
}

// module.exports.actionName = function(req,res){}