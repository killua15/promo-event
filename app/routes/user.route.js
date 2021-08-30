const express = require('express')
const router = express.Router()
const {userController} = require('../controllers')
const {encrtpPass} = require('../middlewares')


router.post('/create',encrtpPass,userController.create);
router.get('/',userController.findAll);
router.get('/:id',userController.findAllById);
router.patch('/:id',userController.update);
module.exports = router;