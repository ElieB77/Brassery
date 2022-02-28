const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
    name: {
        type: String,
    },
    content: {
        type: String,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    createdAt: {
        type: Date,
    },
});

module.exports = mongoose.model("notes", NoteSchema);
