const crypto = require('crypto')
const ErrorResponse = require('../utils/errorResponse.js')
const asyncHandler = require('../middlewares/async')
const sendEmail = require('../utils/sendEmail')
const User = require('../models/User')
const Material = require('../models/Material')
const fs = require('fs');
const uniqid = require('uniqid');
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: 'drp9cvlh2',
    api_key: '367194621118956',
    api_secret: '4YRuLzkx0RczySJ6iJMJTHPkEo4'
});


// *desc    Register user
// *route   POST /api/v1/auth/register
// *access  Public
exports.register = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body

    // Create user
    const newUser = new User({ username, email, password })
    const user = await newUser.save()

    sendTokenResponse(user, 200, res)
})

// *desc    Login user
// *route   POST /api/v1/auth/login
// *access  Public
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body

    // Validate email & password
    if (!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400))
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401))
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password)

    if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401))
    }

    sendTokenResponse(user, 200, res)
})

// *desc    Log user out / clear cookie
// *route   GET /api/v1/auth/logout
// *access  Private
exports.logout = asyncHandler(async (req, res, next) => {
    req.user = null

    res.status(200).json({
        success: true,
        data: {}
    })
})

// *desc    Get current logged in user
// *route   POST /api/v1/auth/me
// *access  Private
exports.getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id)

    res.status(200).json({
        success: true,
        data: user
    })
})

// *desc    Forgot password
// *route   POST /api/v1/auth/forgotpassword
// *access  Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return next(new ErrorResponse('There is no user with that email', 404))
    }

    // Get reset token
    const resetToken = user.getResetPasswordToken()

    await user.save({ validateBeforeSave: false })

    // Create reset url
    const resetUrl = `${req.protocol}://${req.get('host')}/api/auth/resetpassword/${resetToken}`

    const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`

    try {
        await sendEmail({
            email: user.email,
            subjet: 'Password reset token',
            message
        })

        res.status(200).json({ success: true, data: 'Email sent' })
    } catch (error) {
        console.log(err.red)
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save({ validateBeforeSave: false })

        return next(new ErrorResponse('Email could not be sent', 500))
    }

    res.status(200).json({
        success: true,
        data: user
    })
})

// *desc    Update user details
// *route   PUT /api/v1/auth/updatedetails
// *access  Private
exports.updateDetails = asyncHandler(async (req, res, next) => {
    const fielsToUpdate = {
        name: req.body.name,
        email: req.body.email
    }

    const user = await User.updateOne({ _id: req.user.id }, fielsToUpdate)

    res.status(200).json({
        success: true,
        data: user
    })
})

// *desc    Update user details
// *route   PUT /api/v1/auth/updatedetails
// *access  Private
exports.updateOnboarding = asyncHandler(async (req, res, next) => {
    const avatarPath = `./temp/avatar/${uniqid()}.jpg`
    const installationPath = `./temp/installation/${uniqid()}.jpg`
    await req.files.avatar.mv(avatarPath);
    await req.files.installationPicture.mv(installationPath);
    const avatar = await cloudinary.uploader.upload(avatarPath);
    const installationPicture = await cloudinary.uploader.upload(installationPath);

    if (!avatar || !installationPicture) {
        res.json({ result: false, message: 'error' });
    } else {
        const fielsToUpdate = {
            brewedYet: Boolean(req.body.brewedYet),
            favoriteBeer: req.body.favoriteBeer,
            localisation: JSON.parse(req.body.localisation),
            avatar: avatar.url,
            brewDescription: req.body.brewedDescription,
            installationDescription: req.body.installationDescription,
            installationPicture: installationPicture.url,
        }

        const user = await User.updateOne({ _id: req.user.id }, fielsToUpdate)

        for (item of JSON.parse(req.body.materials)) {
            const material = await Material.findOne({ name: item.title })
            await User.updateOne({ _id: req.user.id }, { $push: { materials: material._id } })

        }


        res.status(200).json({
            success: true,
            data: user
        })
    }

    fs.unlinkSync(avatarPath);
    fs.unlinkSync(installationPath);
})


// *desc    Update password
// *route   PUT /api/v1/auth/updatepassword
// *access  Private
exports.updatePassword = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password')

    // Check current password
    if (!(await user.matchPassword(req.body.currentPassword))) {
        return next(new ErrorResponse('Password is incorrect', 401))
    }

    user.password = req.body.newPassword

    await user.save()

    sendTokenResponse(user, 200, res)
})

// *desc    Reset password
// *route   PUT /api/v1/auth/resetpassword/:resettoken
// *access  Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
    // Get hashed token
    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.resettoken)
        .digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorResponse('Invalid token', 400))
    }

    // Set new password
    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    sendTokenResponse(user, 200, res)
})


// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken()

    res
        .status(statusCode)
        .json({ success: true, token })

}