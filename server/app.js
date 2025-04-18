const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
require("dotenv").config();

const passport = require('passport');
// require('./config/passport')(passport);

const routes = require("./routes");
const testRoute = require("./testRoute");


const app = express();

// Allow specific origin or use "*" for all (dev only)
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
  }));

app.use(bodyParser.json());
app.use(passport.initialize()); // to protect routes with authorization

app.use("/api/", routes)

app.use("/api/test", testRoute);

app.get("/", (req, res) => res.json({ msg: "Hello from server..." }));

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "API Route Not found"));
});


app.use(errorHandler);

module.exports = app;