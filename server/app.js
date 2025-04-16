const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const httpStatus = require("http-status");
const routes = require("./routes");
const { errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");

const testRoute = require("./testRoute");

const app = express();

app.use(bodyParser.json());

app.use("/api/", routes)

app.use("/api/test", testRoute);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "API Route Not found"));
});


app.use(errorHandler);

module.exports = app;