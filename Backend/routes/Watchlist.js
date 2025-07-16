const express = require("express");
const topanime = require("./../anime");
const route = express.Router();


route.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newtopAnime = new topanime(data);
    const savednewtopAnime = await newtopAnime.save();
    res.status(200).json(savednewtopAnime);
  } catch (error) {
    res.status(500).json(error, "internal server error");
  }
});

route.get("/", async (req, res) => {
  try {
    const data = await topanime.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error, "internal server error");
  }
});

route.get("/:id", async (req, res) => {
  try {
    const idreq = req.params.id;
      const response = await topanime.find({ id: idreq });
      res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error, "internal server error");
  }
});

module.exports = route