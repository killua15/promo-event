const express = require("express");
const router = express.Router();
const { artistController } = require("../controllers");

router.post("/create", artistController.create);
router.get("/", artistController.findAll);
router.get("/:id", artistController.findAllById);
router.patch("/:id", artistController.update);
module.exports = router;
