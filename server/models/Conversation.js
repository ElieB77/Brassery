const mongoose = require("mongoose");

const ConversationSchema = mongoose.Schema({
    members: {
        type: Array,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("conversations", ConversationSchema);
