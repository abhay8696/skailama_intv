const express = require("express");
const auth = require("../middlewares/auth");
const { projectController } = require("../controllers");

const router = express.Router();

router.post(
    "/new",
    auth,
    projectController.createProject
);

router.get(
    "/:id",
    auth,
    projectController.getProject
);

module.exports = router;
