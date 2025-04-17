const express = require("express");
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const projectRoute = require("./project.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/auth", authRoute);
router.use("/project", projectRoute);

module.exports = router;