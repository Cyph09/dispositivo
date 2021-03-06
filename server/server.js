const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const devices = require('./routes/api/devices');

// create express app
const app = express();

// Body parser middleware
app.use(bodyParser.json());

// DB configuration
const db = require("./config/keys").mongodbURI;

// connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use routes
app.use('/api/devices', devices);

// Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
