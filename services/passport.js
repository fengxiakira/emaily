// passport configuration
// new GoogleStrategy() -> new instance of Google Strategy authentication user with google
// parameter(pass configuration)
// passport.uase:strategy regeister
// new GoogleStrategy()的parameter是在Google注册过的client id & client secret

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// common js modules use require
// es2015 modules : import express from 'express',front-end
// js文件不需要打.js
const keys = require("../config/key");
const mongoose = require("mongoose");
// fetch user
const User = mongoose.model('users');

// user model & done argument
passport.serializeUser((user, done) => {
    // error object, uniquly user_id by mongo not googleId
    // user.id is the identify token
    done(null, user.id);
});

// take token(id) out and back to user model
// mongoose is Asychronous, use then after
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })

})

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
            // search all the records over user collection
            // if exists skip below, if not excute below
            // findOne return a promise, handel asychronisy
            // existingUser : a model instance of existingUser in MongoDB
            User.findOne({ googleId: profile.id }).then((existingUser) => {
                if (existingUser) {
                    // already have a recored with the givn profile ID
                    // tell passport it is finished, null is no error
                    done(null, existingUser);
                } else {
                    // not have this user, existing users is null
                    // create user in the database
                    new User({
                        // new mongoose model instance
                        googleId: profile.id,
                        name: profile.displayName,
                        // save() model instance 正式对应到mongoDB collection object
                    }).save()
                        // second model instance, user User are same record
                        // user from database
                        .then(user => done(null, user));
                }
            });

        }
    )
);