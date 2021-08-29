const express = require('express')
const router = express.Router()
const {productController} = require('../controllers')

router.get('/',productController.findAll);
router.post('/create',productController.create);
router.get('/:id',productController.findAllById);
router.patch('/:id',productController.update);
router.delete('/:id',productController.delete);
module.exports = router;