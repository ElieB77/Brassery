const ErrorResponse = require("../utils/errorResponse.js");
const asyncHandler = require("../middlewares/async");
const Message = require("../models/Message");

exports.getMessages = asyncHandler(async (req, res, next) => {
    const messages = await Message.find({
        conversationId: req.params.conversationId
    })

    res.status(200).json(messages)
});

exports.createMessages = asyncHandler(async (req, res, next) => {
    const newMessage = new Message(req.body)

    const savedMessage = await newMessage.save()

    res.status(200).json(savedMessage)
});