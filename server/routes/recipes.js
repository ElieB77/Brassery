const express = require("express");
const {
    getRecipe,
    getRecipes,
    insertNote,
    createRecipe
} = require("../controllers/recipes");
const router = express.Router();
const Recipe = require("../models/Recipe");

const advancedResults = require("../middlewares/advancedResults");
// const { protect } = require("../middlewares/authentification");

// router.use(protect);

router.route("/").post(createRecipe);

router.route("/").get(advancedResults(Recipe), getRecipes);

router.route("/:id").get(getRecipe);


router.route("/:id/addNote/:section/:position").post(insertNote);

module.exports = router;
