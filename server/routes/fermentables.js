const express = require("express");
const { getFermentables } = require("../controllers/fermentables");

const Fermentable = require("../models/Fermentable");

const router = express.Router();

const advancedResults = require("../middlewares/advancedResults");

router.route("/").get(advancedResults(Fermentable), getFermentables);

module.exports = router;
