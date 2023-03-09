const express = require('express');
const router = express.Router();


const userController = require('../controller/user_controller');

router.get('/SignUp',userController.signUp);
router.get('/SignIn',userController.signIn);
router.get('/verified',userController.verified);
router.post('/create',userController.create);
router.post('/create-session',userController.createSession);

module.exports = router;