const express = require("express")
const router = express.Router()

const {defaultController} = require('../controllers')

router.get('/', defaultController.default);
router.use('/api/system', require("./route.system"));

module.exports = router;
