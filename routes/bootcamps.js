const express = require('express');

const {
    getBootcamps,
    getBootcamp,
} = require('../controllers/bootcamps')

const Bootcamp = require('../models/Bootcamp')
const advancedResults = require('../middlewares/advancedResults')

const router = express.Router();

router
    .route('/')
    .get(advancedResults(Bootcamp), getBootcamps)

router
    .route('/:id')
    .get(getBootcamp)

module.exports = router