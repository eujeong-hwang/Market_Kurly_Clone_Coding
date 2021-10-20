const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  img: {
    type: String,
  },
  priceUnit: {
    type: String,
  },
  volume: {
    type: String,
  },
  delivery: {
    type: String,
  },
  origin: {
    type: String,
  },
  wrap: {
    type: String,
  },
  allergyInfo: {
    type: String,
  },
  expirationDate: {
    type: String,
  },
  regularArrival: {
    type: String,
  },
  warrantyExpirationDate: {
    type: String,
  },
  notification: {
    type: String,
  },
  productSelection: {
    type: String,
  },
  goodsQuantity: {
    type: Number,
  },
});

// postSchema.virtual("postId").get(function () {
//   return this._id.toHexString();
// });

// postSchema.set("toJSON", {
//   virtuals: true,
// });

module.exports = mongoose.model('Posts', postSchema);
