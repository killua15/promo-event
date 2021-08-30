const express = require('express')
const router = express.Router()
const {signinController} = require('../controllers')
const {encrtpPass} = require('../middlewares')


router.post('/signin',signinController.signin);
//router.get('/logout',signinController.findAll);
module.exports = router;