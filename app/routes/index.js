const express = require("express")
const router = express.Router()

const {defaultController} = require('../controllers')

router.get('/', defaultController.default);
router.use('/api/system', require("./route.system"));
router.use('/api/department', require("./department.route"));
router.use('/api/company', require("./company.route"));
router.use('/api/category', require("./category.route"));
router.use('/api/product', require("./product.route"));
router.use('/api/picture', require("./picture.route"));

module.exports = router;
