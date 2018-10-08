const router = require("express").Router();
const barController = require("../../controllers/bar_controller");

router.route("/")
    .get(barController.getBar);

module.exports = router;
