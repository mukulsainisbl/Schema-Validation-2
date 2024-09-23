const express = require("express");
const contactModel = require("../models/contact.model");
const e = require("express");
const contactRouter = express.Router();

contactRouter.get("/", async (req, res) => {
  try {
    let allContact = await contactModel.find();
    res
      .status(200)
      .json({ Msg: "All contact fetched Succesfully", allContact });
  } catch (error) {
    res.status(500).json({Msg : error})
  }
});

contactRouter.post("/", async (req, res) => {
  try {
    const newContact = new contactModel(req.body);
    await newContact.save();
    res.status(200).json({ msg: "Contact Created ", newContact });
  } catch (error) {
    res.status(500).json({ error });
  }
});

contactRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedData = await contactModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedData) {
      res.send("Contact not find");
    }
    res.status(200).json({ msg: "Contact updated Succesfully", updatedData });
  } catch (error) {
    res.send(500).json({ Msg: error });
  }
});

contactRouter.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let deletedData = await contactModel.findByIdAndDelete(id);
    if (!deletedData) {
      res.send("Contact not found");
    }
    res.status(200).json({ msg: "Data is deleted", deletedData });
  } catch (error) {
    res.status(500).json({ Msg: error });
  }
});
module.exports = contactRouter;
