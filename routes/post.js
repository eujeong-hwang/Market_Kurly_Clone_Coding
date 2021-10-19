const express = require("express");
// const Posts = require("../schemas/post");
const router = express.Router();
const getPostFunc = require("../controllers/posts/getPost")
const getDetailFunc = require("../controllers/posts/getDetail")
const postGoodsFunc = require("../controllers/posts/postGoods")

router.post("/posts/main", postGoodsFunc); // 시험해 보게 임의로 만듬
router.get('/posts/main', getPostFunc ); //상품 메인 페이지 조회, authmiddleware 필요없음
router.get("/posts/detail/:postId", getDetailFunc); // 상품 상세 페이지 조회, authMiddleware 필요없음


module.exports = router;
