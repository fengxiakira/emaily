// passport configuration
// new GoogleStrategy() -> new instance of Google Strategy authentication user with google
// parameter(pass configuration)
// passport.use:strategy regeister
// new GoogleStrategy()的parameter是在Google注册过的client id & client secret

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// common js modules use require
// es2015 modules : import express from 'express',front-end
// js文件不需要打.js
const keys = require("../config/key");

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            // handle user after with URL and code after get permission
            callbackURL: "/auth/google/callback"
        },
        // callback
        // Google strategey run sign, terminals
        // accessToken, user allow us to do sth(send/del email ...)
        (accessToken, refreshToken, profile, done) => {
            console.log('access token', accessToken);
            console.log('refreshToken:', refreshToken);
            // user info
            console.log('profile:', profile);
        }
    )
);