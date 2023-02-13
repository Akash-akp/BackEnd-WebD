const Task = require("../models/tsk");
module.exports.create = function(req,res){
    Task.create({
        about: req.body.des,
        due: req.body.due,
        category: req.body.category,
        check: false
    },function(err,newTask){
        if(err){
            console.log(err,'error in creating new task');
            return;
        }
        console.log("****",newTask);
        return res.redirect('back');
    })
};