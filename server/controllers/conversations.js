const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middlewares/async");
const Conversation = require("../models/Conversation");

exports.launchNewConversation = asyncHandler(async (req, res, next) => {
    const newConversation = new Conversation({
        members: [req.user.id, req.body.receiverId]
    })

    const savedConversation = await newConversation.save()

    res.status(200).json(savedConversation)
});

exports.getConversationOfUser = asyncHandler(async (req, res, next) => {
    const conversation = await Conversation.find({
        members: { $in: [req.user.id] }
    })

    res.status(200).json(conversation)
});