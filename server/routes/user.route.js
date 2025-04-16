const express = require("express");
const { createUserController, getUserController } = require("../controllers/user.controller");

const router = express.Router();

router.post("/new", createUserController);
router.get("/user", getUserController);

module.exports = router;