const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.get('/SignUp',passport.alreadysignedin,userController.SignUp);
router.get('/SignIn',passport.alreadysignedin,userController.SignIn);
router.get('/verified',passport.checkAuthentication,userController.verified);
router.get('/SignOut',userController.destroy);

router.post('/create',userController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: 'SignIn'}
),userController.createSession);

module.exports = router;