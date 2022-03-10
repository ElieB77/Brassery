const express = require("express");
const {
    getConversationOfUser,
    launchNewConversation,
} = require("../controllers/conversations");
const router = express.Router();

const { protect } = require("../middlewares/authentification");

router.use(protect);

router
    .route("/")
    .get(getConversationOfUser)
    .post(launchNewConversation)

module.exports = router;