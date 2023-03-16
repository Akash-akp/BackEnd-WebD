const express = require("express");
const passport = require("passport");

const router = express.Router();

const reviewController = require('../controller/review_controller');

router.get('/write',passport.checkAuthentication,reviewController.write);
router.post('/create',passport.checkAuthentication,reviewController.create);
router.get('/reviewDash',passport.checkAuthentication,reviewController.reviewDash);


module.exports = router;