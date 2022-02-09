const ErrorResponse = require('../utils/errorResponse.js')
const asyncHandler = require('../middlewares/async')
const Bootcamp = require('../models/Bootcamp')

// *desc    Get all bootcamps
// *route   GET /api/v1/bootcamps
// *access  Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults)
})

// *desc    Get single bootcamp
// *route   GET /api/v1/bootcamps/:id
// *access  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id)

    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
    }

    res.status(200).json({ success: true, data: bootcamp })
})

// *desc    Create new bootcamp
// *route   POST /api/v1/bootcamps
// *access  Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
    const {
        name, description, website, phone, email, address, careers, housing, jobAssistance, jobGuarantee, acceptGi
    } = req.body

    const newBootcamp = new Bootcamp({
        name, description, website, phone, email, address, careers, housing, jobAssistance, jobGuarantee, acceptGi
    })

    const bootcamp = await newBootcamp.save()

    res.status(201).json({ success: true, data: bootcamp })
})