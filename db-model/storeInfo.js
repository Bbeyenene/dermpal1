const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreInfo = new Schema({
  title: { type: String },
  description: { type: String },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  owner: { type: Schema.Types.ObjectId, ref: "product" },
});
module.exports = mongoose.model("storeInfo", StoreInfo);
