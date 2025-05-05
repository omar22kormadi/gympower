const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
require('dotenv').config();


const port = process.env.PORT || 5000;


app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/gym-power';
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
const articlesRouter = require('./routes/articles');
app.use('/api/articles', articlesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});