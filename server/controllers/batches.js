const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middlewares/async");
const Batch = require("../models/Batch");
const User = require("../models/User");
const Recipe = require("../models/Recipe");

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

exports.createBatch = asyncHandler(async (req, res, next) => {
    const recipe = await Recipe.findById(req.body.recipeId);
    const user = await User.findById(req.body.userId).populate("batches");
    console.log("🚀 ~ file: batches.js ~ line 40 ~ exports.createBatch=asyncHandler ~ user", user)
    let stepsStatus = [];
    recipe.mash.mashSteps.forEach((x, i) =>
        stepsStatus.push({ section: "mash", position: i, isDone: false })
    );
    recipe.boil.boilSteps.forEach((x, i) =>
        stepsStatus.push({ section: "boil", position: i, isDone: false })
    );
    recipe.fermentation.fermentationSteps.forEach((x, i) =>
        stepsStatus.push({
            section: "fermentation",
            position: i,
            isDone: false,
        })
    );
    const newBatch = new Batch({
        recipe: recipe.id,
        createdAt: new Date(),
        stepsStatus,
    });
    const batch = await newBatch.save();

    user.batches.push({
        batch,
    });
    await user.save();

    res.status(200).json(batch);
});
