const express = require("express");
const {
    getBatch,
    getBatches,
    updateStepStatus,
    createBatch
} = require("../controllers/batches");
const router = express.Router();
const Batch = require("../models/Batch");

const advancedResults = require("../middlewares/advancedResults");
const { protect } = require("../middlewares/authentification");

router.use(protect);

router.route("/").get(advancedResults(Batch), getBatches);

router.route("/:id").get(getBatch);

router.route("/update/:id").post(updateStepStatus);

router.route("/create").post(createBatch);

module.exports = router;
