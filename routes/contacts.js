const express = require("express");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const router = express.Router();
const Contact = require("../models/Contact");
//@route  GET api/contacts
//@desc   Get all users contacts
//@access Private

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  POST api/contacts
//@desc   Add new contact
//@access Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],

  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newcontact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newcontact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route  POST api/contacts/:id
//@desc   Update contact
//@access Private
router.post("/:id", (req, res) => {
  res.send("Update contact");
});

//@route  DELETE api/contacts/:id
//@desc   Delete contact
//@access Private
router.post("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
