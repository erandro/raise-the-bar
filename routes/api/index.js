const router = require("express").Router();
const barRoutes = require("./bar");

router.use("/bar", barRoutes);

module.exports = router;
