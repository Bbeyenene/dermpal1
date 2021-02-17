const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rating = new Schema({
  rate: { type: "Number" },
  comment: { type: "string" },
  product: { type: Schema.Types.ObjectId, ref: "product" },
});

const Rating = mongoose.model("rating", rating);
module.exports = Rating;
