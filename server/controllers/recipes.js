const ErrorResponse = require('../utils/errorResponse.js')
const asyncHandler = require('../middlewares/async')
const Recipe = require('../models/Recipe')

// *desc    Get All users
// *route   GET /api/v1/users
// *access  Private
exports.getRecipes = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults)
})