const express = require('express')
const {
    register,
    login,
    logout,
    getMe,
    updateDetails,
    updatePassword,
    forgotPassword,
    resetPassword,
} = require('../controllers/authentification') 
const router = express.Router()
const { protect } = require('../middlewares/authentification')

router
    .route('/register')
    .post(register)

router
    .route('/login')
    .post(login)

router
    .route('/logout')
    .get(protect, logout)

// router
//     .route('/getRecipes')
//     .get(getRecipes)
// // Route pour récuperer les recettes dans la BDD 

// router
//     .route('/getRecipesByFilter')
//     .post(getRecipesByFilter)
// // Route pour récuperer les recettes en fonction des filtres de l'utilisateur 

router
    .route('/me')
    .get(protect, getMe)

router
    .route('/updatedetails')
    .put(protect, updateDetails)

router
    .route('/updatepassword')
    .put(protect, updatePassword)

router
    .route('/forgotpassword')
    .post(forgotPassword)

router
    .route('/resetpassword/:resettoken')
    .put(resetPassword)

module.exports = router