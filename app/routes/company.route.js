const express = require('express')
const router = express.Router()
const {companyController} = require('../controllers')


router.post('/create',companyController.create);
router.get('/',companyController.findAll);
router.get('/:id',companyController.findAllById);
router.patch('/:id',companyController.update);
router.delete('/:id',companyController.delete);
module.exports = router;