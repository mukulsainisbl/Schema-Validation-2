const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    name: { type: String, minlength: 3, required: true },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
      unique: true,
    },
    phone: { type: String, minLength: [10, "Enter valid Digits (10)"] },
    age: { type: Number, min: 18, max: 65 },
  },
  { versionKey: false }
);

const contactModel = mongoose.model("Contact", ContactSchema);

module.exports = contactModel;
