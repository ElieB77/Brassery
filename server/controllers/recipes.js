const ErrorResponse = require('../utils/errorResponse.js')
const asyncHandler = require('../middlewares/async')
const Recipe = require('../models/Recipe')

// *desc    Get All users
// *route   GET /api/v1/users
// *access  Private
exports.getRecipes = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults)
})

exports.getRecipe = asyncHandler(async (req, res, next) => {
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).json(recipe);
});