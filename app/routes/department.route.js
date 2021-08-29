const express = require('express')
const router = express.Router()
const {departmentController} = require('../controllers')


router.post('/create',departmentController.create);
router.get('/',departmentController.findAll);
router.get('/:id',departmentController.findAllById);
router.patch('/:id',departmentController.update);
router.delete('/:id',departmentController.delete);
//router.get('/:id',departmentController.findOne);
module.exports = router;