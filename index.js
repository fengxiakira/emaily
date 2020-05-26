// root file
// import express, require to get access to express library
// deployment target https://git.heroku.com/still-castle-71616.git
const express = require("express");
const keys = require("./config/key");
// const mongoose = require("mongoose");
// set up passport for authentication

// create express app
// passport.js haven't any output,不需要赋给const
require('./services/passport');
const app = express();

// attach require 内的function to app,也就是express()
require('./routes/authRoute')(app);
mongoose.connect(keys.mongoURI);


// node that it wants to listen for incoming traffic on port 5000
// app.listen(5000);

// dynamically figure out the port listend to
// capitalized is not changed
// figure 当前heroku 运行该app的port，process.env underlying environment
// 5000 is a default port on virtual machine
const PORT = process.env.PORT || 5000;
app.listen(PORT);
// localhost:5000
