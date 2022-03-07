const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middlewares/async");
const Batch = require("../models/Batch");

// *desc    Get All users
// *route   GET /api/v1/users
// *access  Private
exports.getBatches = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

exports.getBatch = asyncHandler(async (req, res, next) => {
    const batch = await Batch.findById(req.params.id).populate("recipe");
    res.status(200).json(batch);
});

exports.updateStepStatus = asyncHandler(async (req, res, next) => {
    console.log(req.body.isDone);
    const batch = await Batch.findById(req.params.id);
    if (req.body.isDone !== undefined) {
        const index = batch.stepsStatus.findIndex(
            (x) =>
                x.section === req.body.section &&
                x.position === req.body.position
        );
        if (index === -1) {
            batch.stepsStatus.push(req.body);
        } else {
            batch.stepsStatus[index].isDone = req.body.isDone;
        }
        await batch.save();
    }
    res.status(200).json(batch);
});

exports.createBatch = asyncHandler(async (req, res, next) => {});
