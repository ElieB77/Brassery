const mongoose = require("mongoose");

const StepsStatus = mongoose.Schema({
    section: String ,
    position: Number ,
    isDone: Boolean ,
});

const GravitySchema = mongoose.Schema({
    description: { type: String },
    value: { type: Number },
    createdAt: { type: Date },
});

const CommentSchema = mongoose.Schema({
    title: { type: String },
    content: { type: String },
    createdAt: { type: Date },
});

const BatchModel = mongoose.Schema({
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    createdAt: Date,
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
    gravities: [GravitySchema],
    comments: [CommentSchema],
});

module.exports = mongoose.model("batches", BatchModel);
