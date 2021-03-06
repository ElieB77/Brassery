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
      (x) => x.section === req.body.section && x.position === req.body.position
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
  const batchId = batch.id;

  user.batches.push(batchId);
  await user.save();

  res.status(200).json(batch);
});

exports.deleteBatch = asyncHandler(async (req, res, next) => {
  await Batch.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true });
});

exports.findBatch = asyncHandler(async (req, res, next) => {
  const userBatches = await User.findById(req.body.userId).populate("batches");
  res.status(200).json({ data: userBatches.batches });
});

exports.insertMeasure = asyncHandler(async (req, res, next) => {
  const batch = await Batch.findById(req.params.id);
  batch.gravities.push({
    description: req.body.description,
    value: req.body.value,
    createdAt: new Date(),
  });
  await batch.save();
  res.status(200).json({ success: true });
});

exports.findBatchByUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const userBatches = await User.findById(req.body.userId).populate("batches");

  res.status(200).json({ data: userBatches.batches });
});
