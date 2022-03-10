const express = require("express");
const { getCultures } = require("../controllers/cultures");

const Culture = require("../models/Culture");

const router = express.Router();

const advancedResults = require("../middlewares/advancedResults");

router.route("/").get(advancedResults(Culture), getCultures);

module.exports = router;
