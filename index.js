const express = require("express");
const app = express();
const cors = require("cors");
const secrets = require("./routes/secrets.js");
const PORT = 3000;
const connectDB = require("./db/connect.js");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use("/api/secret", secrets);

const mongoose = require("mongoose");

const Secret = require("./models/secretModel.js");

const logger = require("./logger.js");
app.use(logger);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
