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
    const batch = await Batch.findById(req.params.id);
    res.status(200).json(batch);
});
