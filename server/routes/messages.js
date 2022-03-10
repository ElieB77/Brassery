const express = require("express");
const {
    getMessages,
    createMessages,
} = require("../controllers/messages");
const router = express.Router();

const { protect } = require("../middlewares/authentification");

router.use(protect);

router
    .route("/")
    .post(createMessages)

router
    .route('/:conversationId')
    .get(getMessages)

module.exports = router;