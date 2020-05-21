// root file
// import express, require to get access to express library
// deployment target https://git.heroku.com/still-castle-71616.git
const express = require('express');
// set up passport for authentication
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// common js modules use require
// es2015 modules : import express from 'express',front-end
// js文件不需要打.js
const keys = require('./config/key');
// create express app
const app = express();
// new GoogleStrategy() -> new instance of Google Strategy authentication user with google
// parameter(pass configuration)
// passport.use:strategy regeister
// new GoogleStrategy()的parameter是在Google注册过的client id & client secret
// second argument to google strategy is arrow function
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    // handle user after with URL and code after get permission
    callbackURL: '/auth/google/callback'
},
    (accessToken) => {
        console.log(accessToken);
    }
)

);

// route handler
//app.get create a new route handler
// get watch for incoming requests with this method
// '/' show some particular route,地址
// req,request(incoming request)
// res,outgoing response
// res.send: send some JSON back to who ever made their request
// app.get('/', (req, res) => {
//     res.send({ hi: 'there' });

// });

// node that it wants to listen for incoming traffic on port 5000
// app.listen(5000);

// dynamically figure out the port listend to 
// capitalized is not changed
// figure 当前heroku 运行该app的port，process.env underlying environment
// 5000 is a default port on virtual machine
const PORT = process.env.PORT || 5000;
app.listen(PORT);
// localhost:5000

