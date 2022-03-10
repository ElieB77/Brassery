const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middlewares/async");
const Culture = require("../models/Culture");

// *desc    Get All users
// *route   GET /api/v1/users
// *access  Private
exports.getCultures = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});
