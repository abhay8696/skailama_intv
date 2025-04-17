const express = require("express");
const auth = require("../middlewares/auth");
const { podcastController } = require("../controllers");

const router = express.Router();

router.post(
    "/new",
    auth,
    podcastController.createPodcast
);

module.exports = router;