const express = require('express')
const router = express.Router()
const {systemController} = require('../controllers')


router.get('/',systemController.findAll);
router.get('/:id',systemController.findOne);
module.exports = router;