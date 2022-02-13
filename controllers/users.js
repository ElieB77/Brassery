const ErrorResponse = require('../utils/errorResponse.js')
const asyncHandler = require('../middlewares/async')
const User = require('../models/User')

// *desc    Get All users
// *route   GET /api/v1/users
// *access  Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults)
})

// *desc    Get Single user
// *route   GET /api/v1/users/:id
// *access  Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id)

    res.status(200).json({ success: true, data: user })
})

// *desc    Create user
// *route   POST /api/v1/users
// *access  Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body)

    res.status(201).json({ success: true, data: user })
})

// *desc    Update user
// *route   PUT /api/v1/users/:id
// *access  Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.updateOne({ _id: req.params.id }, req.body)

    res.status(200).json({ success: true, data: user })
})

// *desc    Delete user
// *route   DELETE /api/v1/users/:id
// *access  Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
    await User.deleteOne({ _id: req.params.id })

    res.status(200).json({ success: true, data: {} })
})
