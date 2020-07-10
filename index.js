// root file, list all dependencies/modules
// import express, require to get access to express library
// deployment target https://git.heroku.com/still-castle-71616.git
const express = require("express");
// ????,fix
const keys = require("./config/key");
const mongoose = require("mongoose");
// set up passport for authentication
const cookieSessions = require("cookie-session");
// passport to track user login statuses
const passport = require("passport");
// express middleware
const bodyParser = require("body-parser");


// models(collection in MongoDB)
require('./models/user');
// passport.js haven't any output,不需要赋给const
require('./services/passport');

// connect to mongodb
mongoose.connect(keys.mongoURI);
// create express app
const app = express();

// app.use wrap middleware
// Returns middleware that only parses json and only looks at requests
// the billingRoutes req is 
app.use(bodyParser.json());

// implement authentication flow by enabling cookies inside of our application
// app.use wrap middleware. middleware is prcessing to request 
app.use(
    cookieSessions(
        // configuration object
        {
            // cookie last 30 days
            maxAge: 30 * 24 * 60 * 60 * 1000,
            // key to encrypt cookie
            keys: [keys.cookieKey]
        }
    )
);

// tell passport to use cookies,Start up express for this request lifecycle
app.use(passport.initialize());
// Kick this person into the oauth flow.  When they're done, save info to their 'session' that indicates we know who they are
app.use(passport.session());

// attach require 内的function to app,也就是express()
require('./routes/authRoute')(app);
require('./routes/billingRoutes')(app);

// configuration for Express in produ
if (process.env.NODE_ENV === 'production') {
    // Express will server up production assets[specific file]
    // like main.js / main.css
    // look up in the client/build folder
    // Each app.use(middleware) is called every time a request is sent to the server.
    app.use(express.static(path.resolve(__dirname, '../client/build')))

    // Express will server up index.html 
    // if it doesn't recognize the route
    const path = require('path')
    // 上面三个【require, require, app.use(express.static)都fail
    // 寻找path所有可能性，give back index.html
    app.get('*', (req, res) => {
        // path.resolve(), resolveing path segment with the current directory
        // __dirname : folder name
        // __dirname/client/build/index.html
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
    })

}


// node that it wants to listen for incoming traffic on port 5000
// app.listen(5000);

// dynamically figure out the port listend to
// capitalized is not changed
// figure 当前heroku 运行该app的port，process.env underlying environment
// 5000 is a default port on virtual machine
const PORT = process.env.PORT || 5000;
app.listen(PORT);
// localhost:5000
