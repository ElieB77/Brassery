const express = require("express");
const { getRecipe } = require("../controllers/recipe");
const {
    getRecipes,
} = require('../controllers/recipes')
const router = express.Router();
const Recipe = require('../models/Recipe')

router.route("/:id").get(getRecipe);

const router = express.Router();

const advancedResults = require('../middlewares/advancedResults')
const { protect } = require('../middlewares/authentification')

router.use(protect)

router
    .route('/')
    .get(advancedResults(Recipe), getRecipes)

module.exports = router