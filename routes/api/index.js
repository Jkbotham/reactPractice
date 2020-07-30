const router = require("express").Router();
const weatherRoute = require("./weather")

router.use("/weather", weatherRoute);

module.exports = router;
