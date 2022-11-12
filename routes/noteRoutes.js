const express = require("express");
const router = express.Router();
const Note = require("../model/saleDatamodel");

router.route("/create").post((req, res) => {
  const cusid = req.body.cusid;
  const companyname = req.body.companyname;
  const billaddress = req.body.billaddress;
  const contactno = req.body.contactno;
  const country = req.body.country;
  const zipcode = req.body.zipcode;
  const newNote = new Note({
    cusid,
    companyname,
    billaddress,
    contactno,
    country,
    zipcode,
    newNote,
  });
  newNote.save();
});
router.route("/notes").get((req, res) => {
  Note.find().then((foundNotes) => res.json(foundNotes));
});
module.exports = router;
