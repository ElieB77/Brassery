const mongoose = require("mongoose");

const CultureSchema = mongoose.Schema({
    name: { type: String },
    type: { type: String },
    form: { type: String },
});

module.exports = mongoose.model("cultures", CultureSchema);
