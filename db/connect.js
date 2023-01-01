const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = (url) => {
  return mongoose.connect(url, options);
};

module.exports = connectDB;
