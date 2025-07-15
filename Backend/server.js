const express = require("express");
const app = express();
const db = require("./db");
const topanime = require("./anime");
const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newtopAnime = new topanime(data);
    const savednewtopAnime = await newtopAnime.save();
    res.status(200).json(savednewtopAnime);

  } catch (error) {
    res.status(500).json(error, "internal server error");
  }
});

app.listen(3000);
