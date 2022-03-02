const express = require('express');
const {
    getMaterials,
} = require('../controllers/materials')

const Material = require('../models/Material')

const router = express.Router();

const advancedResults = require('../middlewares/advancedResults')
const { protect } = require('../middlewares/authentification')

router.use(protect)

router
    .route('/')
    .get(advancedResults(Material), getMaterials)


module.exports = router