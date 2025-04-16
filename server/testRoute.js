const express = require("express");
const router = express.Router();

router.get("/",async (req, res, next) => res.status("This is a test route"))

module.exports = router;