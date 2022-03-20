const express = require('express')
const {
    register,
    login,
    logout,
    getMe,
    updateDetails,
    updateOnboarding,
    updateAvatarPicture,
    updateBrewDescription,
    updateUsername,
    updateEmail,
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

router
    .route('/me')
    .get(protect, getMe)

router
    .route('/updatedetails')
    .put(protect, updateDetails)

router
    .route('/updateusername')
    .put(protect, updateUsername)

router
    .route('/updateemail')
    .put(protect, updateEmail)

router
    .route('/updateavatar')
    .put(protect, updateAvatarPicture)

router
    .route('/updatebrewdescription')
    .put(protect, updateBrewDescription)

router
    .route('/updateonboarding')
    .put(protect, updateOnboarding)

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