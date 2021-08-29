const express = require('express')
const router = express.Router()
const {categoryController} = require('../controllers')


router.post('/create',categoryController.create);
router.get('/',categoryController.findAll);
router.get('/:id',categoryController.findAllById);
router.patch('/:id',categoryController.update);
router.delete('/:id',categoryController.delete);
//router.get('/:id',departmentController.findOne);
module.exports = router;