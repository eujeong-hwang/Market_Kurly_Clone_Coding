const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required : true,
    },
    price: {
        type: Number,
        required : true,
    },
    img: {
        type: String,
        required : true,
        unique : true
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

module.exports = mongoose.model("Posts", postSchema);
