const mong = require("mongoose");

const topanimeSchema = new mong.Schema({
  name: {
    type: String
    // required: true,
  },
  rating: {
    type: Number
  },
  img: {
    type: String
    // enum:["small","medium","large"],
    // required: true
  },
  episode: {
    type: Number
    // required: true
  },
});

const anime = mong.model("topanime", topanimeSchema);
module.exports = anime;
