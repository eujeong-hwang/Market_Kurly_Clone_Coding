const Posts = require('../../schemas/post');
// const authMiddleware = require("../middlewares/authMW");

const postGoodsFunc = async (req, res) => {
  try {
    const {
      title,
      price,
      img,
      priceUnit,
      volume,
      delivery,
      origin,
      wrap,
      allergyInfo,
      expirationDate,
      regularArrival,
      warrantyExpirationDate,
      notification,
      productSelection,
      goodsQuantity,
    } = req.body;

    const newPost = await Posts.create({
      title,
      price,
      img,
      priceUnit,
      volume,
      delivery,
      origin,
      wrap,
      allergyInfo,
      expirationDate,
      regularArrival,
      warrantyExpirationDate,
      notification,
      productSelection,
      goodsQuantity,
    });

    console.log(newPost);
    res.send({ result: 'success' });
  } catch (err) {
    next(err);
  }
};

module.exports = postGoodsFunc;
