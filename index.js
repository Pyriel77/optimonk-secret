const express = require('express');
const app = express();
const cors = require('cors');
const secrets = require('./routes/secrets.js');
const PORT = process.env.PORT || 3000;
const connectDB = require('./db/connect.js');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use('/api/secret', secrets);

const mongoose = require('mongoose');

const Secret = require('./models/secretModel.js');

const start = async () => {
  try {
    await connectDB(
      'mongodb+srv://Secreter:K16-j8+2dF@nodejsprojects.enrla.mongodb.net/Optimonk?retryWrites=true&w=majority'
    );
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
