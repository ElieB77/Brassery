const express = require("express");
const { getHops } = require("../controllers/hops");

const Hop = require("../models/Hop");

const router = express.Router();

const advancedResults = require("../middlewares/advancedResults");

router.route("/").get(advancedResults(Hop), getHops);

module.exports = router;
