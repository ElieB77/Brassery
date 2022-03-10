const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
    conversationId: {
        type: String,
    },
    sender: {
        type: String
    },
    text: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model("messages", MessageSchema);
