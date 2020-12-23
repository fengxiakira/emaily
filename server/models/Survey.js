const mongoose = require("mongoose");
const recipientSchema = require("./Recipient");

const { Schema } = mongoose;
// recipients: [String] array of string
// recipients: [recipientSchema], array of recipients schema records
// ref : 'User' Schema.Types.ObjectId belongs to User
// _ a relationship field
const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model("surveys", surveySchema);
