const express = require("express");
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addLikeRecipe,
} = require("../controllers/users");

const User = require("../models/User");

const router = express.Router();

const advancedResults = require('../middlewares/advancedResults')

router.route("/recipe/:id/:recipeId").put(addLikeRecipe);

router
    .route("/")
    .get(advancedResults(User), getUsers)
    .post(createUser);

router
    .route("/:id")
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
