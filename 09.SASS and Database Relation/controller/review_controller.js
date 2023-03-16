const Review = require('../models/review');

module.exports.write = (req,res) => {
    return res.render('writeReview',{
        title: "Review"
    })
}

module.exports.create = (req,res) => {
    Review.create({
        star: req.body.star,
        content: req.body.message,
        user: req.user._id
    })
    .catch(err=>console.log("error in creating review"))
    .then(()=>{
        return res.redirect('reviewDash');
    })
}

module.exports.reviewDash = (req,res) => {
    Review.find({}).populate('user').exec()
    .catch(err=>console.log("error in finding review"))
    .then((review)=>{
        return res.render('ReviewDash',{
            title: "Reviews",
            Reviews: review
        })
    })
}