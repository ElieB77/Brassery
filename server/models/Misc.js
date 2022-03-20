const mongoose = require("mongoose");

const MiscSchema = mongoose.Schema({
    name: { type: String },
    type: { type: String },
});

module.exports = mongoose.model("miscs", MiscSchema);
