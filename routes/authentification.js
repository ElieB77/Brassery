const express = require('express')
const { register, login, getMe } = require('../controllers/authentification')
const router = express.Router()
const { protect } = require('../middlewares/authentification')

router
    .route('/register')
    .post(register)

router
    .route('/login')
    .post(login)

router
    .route('/me')
    .get(protect, getMe)

module.exports = router