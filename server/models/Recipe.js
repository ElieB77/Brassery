const mongoose = require("mongoose");

const MashStepSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a mash step name"],
    },
    description: {
        type: String,
    },
    type: {
        type: String,
    },
    amount: {
        type: Number,
    },
    stepTemperature: {
        type: Number,
    },
    stepTime: {
        type: Number,
    },
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "notes" }],
});

const MashSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a mash name"],
    },
    description: {
        type: String,
    },
    grainTemperature: {
        type: Number,
    },
    mashSteps: [MashStepSchema],
});

const IngredientSchema = mongoose.Schema({
    hops: [{ type: mongoose.Schema.Types.ObjectId, ref: "hops" }],
    cultures: [{ type: mongoose.Schema.Types.ObjectId, ref: "cultures" }],
    fermentables: [
        { type: mongoose.Schema.Types.ObjectId, ref: "fermentables" },
    ],
    miscs: [{ type: mongoose.Schema.Types.ObjectId, ref: "miscs" }],
});

const TasteSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    description: {
        type: String,
    },
    rating: {
        type: Number,
    },
});

const BoilStepSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a boil step step name"],
    },
    description: {
        type: String,
    },
    startTemperature: {
        type: String,
    },
    endTemperature: {
        type: Number,
    },
    stepTime: {
        type: Number,
    },
    startGravity: {
        type: Number,
    },
    endGravity: {
        type: Number,
    },
    notes: { type: mongoose.Schema.Types.ObjectId, ref: "notes" },
});

const BoilSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a boil name"],
    },
    description: {
        type: String,
    },
    preBoilSize: {
        type: Number,
    },
    boilTime: {
        type: Number,
    },
    boilSteps: [BoilStepSchema],
});

const FermentationStepSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a boil step step name"],
    },
    description: {
        type: String,
    },
    startTemperature: {
        type: String,
    },
    endTemperature: {
        type: Number,
    },
    stepTime: {
        type: Number,
    },
    startGravity: {
        type: Number,
    },
    endGravity: {
        type: Number,
    },
    notes: { type: mongoose.Schema.Types.ObjectId, ref: "notes" },
});

const FermentationSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a boil name"],
    },
    description: {
        type: String,
    },
    fermentationSteps: [FermentationStepSchema],
});

const RecipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a recipe name"],
    },
    description: {
        type: String,
    },
    type: {
        type: String,
    },
    author: {
        type: String,
    },
    batch_size: {
        type: Number,
    },
    style: {
        type: String,
    },
    ingredients: IngredientSchema,
    mash: MashSchema,
    ingredients: IngredientSchema,
    originalGravity: {
        type: String,
    },
    finalGravity: {
        type: String,
    },
    alcoholByVolume: {
        type: String,
    },
    ibuEstimate: {
        type: String,
    },
    colorEstimate: {
        type: String,
    },
    fermentation: FermentationSchema,
    boil: BoilSchema,
    taste: [TasteSchema],
});

module.exports = mongoose.model("recipes", RecipeSchema);
