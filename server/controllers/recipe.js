const asyncHandler = require("../middlewares/async");
const Recipe = require("../models/Recipe");

exports.getRecipe = asyncHandler(async (req, res, next) => {
    const recipe = await Recipe.findById(req.params.id);
    console.log(
        "🚀 ~ file: recipe.js ~ line 6 ~ exports.getRecipe=asyncHandler ~ recipe",
        recipe
    );
    res.status(200).json(recipe);
});
