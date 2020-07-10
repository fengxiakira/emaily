// create user collection in MongoDB at same time
const mongoose = require('mongoose');
// create schema
// const Schema = mongoose.Schema;
// ES6 feature: mongoose.Schema 赋给 object Schema
const { Schema } = mongoose;

// create collection
const userSchema = new Schema({
    googleId: String,
    name: String,
    // default to 0. assigned to object
    credits: { type: Number, default: 0 }
});

// load userSchema into mongoose, two arguments, with name 'user'
mongoose.model('users', userSchema);
