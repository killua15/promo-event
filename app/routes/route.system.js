const express = require('express')
const router = express.Router()
const {systemController} = require('../controllers')

router.post('/create',systemController.create);
router.get('/',systemController.findAll);
router.get('/:id',systemController.findAllById);
router.patch('/:id',systemController.update);
router.delete('/:id',systemController.delete);
module.exports = router;