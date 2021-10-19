const mongoose = require("mongoose");

const { Schema } = mongoose;
const CartSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
  },
  quntity: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// PostSchema.virtual("postId").get(function () {
//   return this._id.toHexString();
// });
// PostSchema.set("toJSON", {
//   virtuals: true,
// });

module.exports = mongoose.model("Cart", CartSchema);