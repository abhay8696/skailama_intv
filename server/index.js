const app = require("./app");
const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.once("open", () => console.log("Connected to Mongodb"));


app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`));