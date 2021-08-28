const express = require("express")
const router = express.Router()

const {defaultController} = require('../controllers')

router.get('/', defaultController.default);

module.exports = router;
