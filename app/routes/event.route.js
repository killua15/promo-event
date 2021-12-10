const express = require("express");
const router = express.Router();
const { eventController } = require("../controllers");

router.post("/create", eventController.create);
router.get("/", eventController.findAll);
router.get("/:id", eventController.findAllById);
router.patch("/:id", eventController.update);
module.exports = router;
