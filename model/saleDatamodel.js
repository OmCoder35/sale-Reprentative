const mongoose = require("mongoose");

const noteSchema = {
  cusid: Number,
  companyname: String,
  billaddress: String,
  contactno: Number,
  country: String,
  zipcode: Number,
};

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
