const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const testRoute = require("./testRoute");

const app = express();

app.use(bodyParser.json());

app.use("/test", testRoute);

module.exports = app;