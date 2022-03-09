const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middlewares/async");
const Recipe = require("../models/Recipe");
const Hop = require("../models/Hop");
const Fermentable = require("../models/Fermentable");
const Misc = require("../models/Misc");
const Culture = require("../models/Culture");

// *desc    Get All users
// *route   GET /api/v1/users
// *access  Private
exports.getRecipes = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

exports.getRecipe = asyncHandler(async (req, res, next) => {
    const recipe = await Recipe.findById(req.params.id)
    await Hop.populate(recipe.ingredients, { path: "hops" });
    await Fermentable.populate(recipe.ingredients, { path: "fermentables" });
    await Misc.populate(recipe.ingredients, { path: "miscs" });
    await Culture.populate(recipe.ingredients, { path: "cultures" });
    res.status(200).json(recipe);
});

exports.insertNote = asyncHandler(async (req, res, next) => {
    const recipe = await Recipe.findById(req.params.id);
    recipe[req.params.section][`${req.params.section}Steps`][
        req.params.position
    ].notes.push({
        name: req.body.name,
        content: req.body.content,
        createdAt: new Date(),
    });
    await recipe.save();
    res.status(200).json(recipe);
});

exports.createRecipe = asyncHandler(async (req, res, next) => {
    console.log("🌞",req.body);
    const recipe = await new Recipe(req.body);
    await recipe.save();
    res.status(200).json(recipe);
});

