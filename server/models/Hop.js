const mongoose = require("mongoose");

const HopSchema = mongoose.Schema({
    name: { type: String },
    year: { type: Number },
    origin: { type: String },
    form: { type: String },
    alphaAcid: { type: Number },
});

module.exports = mongoose.model("hops", HopSchema);
