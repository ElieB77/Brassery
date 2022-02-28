const mongoose = require("mongoose");

const FermentableSchema = mongoose.Schema({
    name: { type: String },
    type: { type: String },
    origin: { type: String },
    grainGroup: { type: String },
    color: { type: Number },
});

module.exports = mongoose.model("fermentables", FermentableSchema);
