const express = require('express');

const router = express.Router();

const homeController = require('../controller/home_controller');

router.get('/SignUp',homeController.signUp);
router.get('/SignIn',homeController.signIn);
router.get('/verified',homeController.verified);

router.get('/',homeController.home);

module.exports = router;