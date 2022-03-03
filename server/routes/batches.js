const express = require("express");
const { getBatch, getBatches } = require("../controllers/recipes");
const router = express.Router();
const Batch = require("../models/Batch");

const advancedResults = require("../middlewares/advancedResults");
const { protect } = require("../middlewares/authentification");

router.use(protect);

router.route("/").get(advancedResults(Batch), getBatches);

router.route("/:id").get(getBatch);

module.exports = router;
