const express = require("express");
const router = express.Router();

const { defaultController, userController } = require("../controllers");

router.get("/", defaultController.default);
router.use("/api/user", require("./user.route"));
router.use("/api/artist", require("./artist.route"));
router.use("/api/event", require("./event.route"));

module.exports = router;
