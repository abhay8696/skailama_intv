const express = require("express");
const { createUserController } = require("../controllers/user.controller");

const router = express.Router();

router.post("/new", createUserController);

module.exports = router;