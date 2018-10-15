const router = require("express").Router();
const barController = require("../../controllers/bar_controller");

router.route("/")
    .get(barController.getBar);

router.route("/score")
    .get(barController.getScore)
    .post(barController.postScore);

module.exports = router;
