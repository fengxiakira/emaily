const mongoose = require('mongoose');
const RecipientSchema = require('./Recipient')

const { Schema } = mongoose
// recipients: [String] array of string
// recipients: [RecipientSchema], array of recipients schema records

const surveySchema = new Schema({
    title: String,
    subject: String,
    body: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 }

})

mongoose.model('surveys', surveySchema)
