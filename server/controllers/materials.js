const ErrorResponse = require('../utils/errorResponse.js')
const asyncHandler = require('../middlewares/async')
const Material = require('../models/Material')
const User = require('../models/User')

// *desc    Get All users
// *route   GET /api/v1/users
// *access  Private
exports.getMaterials = asyncHandler(async (req, res, next) => {
    res.advancedResults.data.map(item => {
        if (!item.brand || item.brand === 'null') {
            item.brand = 'Autres'
        }
    })


    res.status(200).json(res.advancedResults)
})

exports.findMaterialById = asyncHandler(async (req, res, next) => {
    const userMaterial = await User.findById(req.body.userId).populate('materials')
    res.status(200).json({data: userMaterial.materials})
})