const mongoose = require("mongoose");

const StepsStatus = mongoose.Schema({
    section: { type: String },
    position: { type: Number },
    isDone: { type: Boolean },
});

const BatchModel = mongoose.Schema({
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    createdAt: {
        type: Date,
    },
    stepsStatus: [StepsStatus],
    /* ex: 
    [
        {
            section: "mash",
            position: 0,
            isDone: true
        },
        {
            section: "mash",
            position: 1,
            isDone: true
        },
        {
            section: "boil",
            position: 0,
            isDone: false
        },
    ]
    */
});

module.exports = mongoose.model("batches", BatchModel);
