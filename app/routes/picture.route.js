const express = require('express')
const router = express.Router()
const {pictureController} = require('../controllers')



//router.get('/',pictureController.findAll);
router.get('/:productId',pictureController.findAllByProduct);
router.post('/create',pictureController.create);
router.patch('/:id',pictureController.update);
router.delete('/:id',pictureController.delete);

module.exports = router;