const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
  name: String,
  title: String,
  createdat: {
    type: Date,
    default: Date.now(),
  },
  creator: String,
  description: String,
  imbd: String,
  release: String,
  language: String,
  resolution: String,
  size: String,
  quickstory: String,
  tags: [String],
  img1: String,
  // img2: {
  //   data: String,
  // },
  // img3: {
  //   data: String,
  // },
  // photo1: {
  //   data: Buffer,
  //   contentType: String,
  // },
  // photo2: {
  //   data: Buffer,
  //   contentType: String,
  // },
  // photo3: {
  //   data: Buffer,
  //   contentType: String,
  // },
  movielink: [String],

  quality: {
    type: String,
  },
  trailer: {
    type: String,
  },
});
const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
