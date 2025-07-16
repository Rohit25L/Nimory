const express = require("express");
const app = express();
const db = require("./db");
const topanime = require("./anime");
const bodyParser = require("body-parser");
app.use(bodyParser.json());






const watchlistR = require("./routes/Watchlist")

app.use("/watchlist" ,watchlistR)
app.listen(3000);
