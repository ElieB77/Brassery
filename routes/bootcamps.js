const express = require('express');

const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
} = require('../controllers/bootcamps')

const Bootcamp = require('../models/Bootcamp')
const advancedResults = require('../middlewares/advancedResults')

const router = express.Router();

const { protect, authorize } = require('../middlewares/authentification')

router
    .route('/')
    .get(advancedResults(Bootcamp), getBootcamps)
    .post(protect, authorize('publisher', 'admin'), createBootcamp)

router
    .route('/:id')
    .get(getBootcamp)

module.exports = router