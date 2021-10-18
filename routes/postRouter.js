const express = require("express");
const Posts = require("../schemas/post");
const router = express.Router();
const authMiddleware = require("../middlewares/authMW");

// 시험해 보게 임의로 만듬
router.post("/posts/main", async (req, res, next) => {
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
    res.send({ result: "success" });
  } catch (err) {
    next(err);
  }
});

//authMiddleware 빼고 테스트 중(user token 없기 때문에)
// 어떻게 3개만 보낼까...? title, price, img만 --> 아니면 우리가 다 보내주면 프론트에서 3개만 가져다 써도 됨
router.get('/posts/main', async (req, res, next) => {
    try {
        const post = await Posts.find({})
        res.json({ result:"success", post: post })
    } catch (err) {
        res.status(400).send({
            errorMessage: "알 수 없는 오류가 떴습니다. 관리자에게 문의하세요.",
        });
    }
})

// 상품 상세 페이지 조회
// authMiddleware 빼고 테스트 중(user token 없기 때문에)
// 왜 /posts/detail?postId 하면 안되는지 모름..
router.get("/posts/detail/:postId", async (req, res, next) => {
  try {
    const { postId } = req.params;
    console.log(postId);
    const postDetail = await Posts.findOne({ _id: postId });
    console.log(postDetail);
    res.json({ result: "success", detail: postDetail });
  } catch (err) {
    res.status(400).send({
      errorMessage: "알 수 없는 오류가 떴습니다. 관리자에게 문의하세요.",
    });
  }
});


module.exports = router;
