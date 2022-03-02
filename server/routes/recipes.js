const express = require('express');
const {
    getRecipes,
} = require('../controllers/recipes')

const Recipe = require('../models/Recipe')

const router = express.Router();

const advancedResults = require('../middlewares/advancedResults')
const { protect } = require('../middlewares/authentification')

router.use(protect)

router
    .route('/')
    .get(advancedResults(Recipe), getRecipes)


module.exports = router