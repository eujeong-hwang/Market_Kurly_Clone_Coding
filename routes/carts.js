const express = require('express');
const Cart = require('../schemas/Cart');
const router = express.Router();

//장바구니 조회 API
router.get('/carts', async (req, res) => {
  const { userId } = req.body;
  try {
    const cartAllList = await Cart.find({ userId });
    return res.status(200).send({
      result: 'sucess',
      cartAllList: cartAllList,
      msg: '장바구니를 모두 불러왔습니다.'
    });
  } catch {
    return res.status(400).send({
      result: 400,
      msg: '알 수 없는 오류가 발생했습니다. 관리자에게 문의하세요.',
    });
  }
});


//장바구니 등록 API
// 기존에 담긴 물품이라면?
// 일단 1title > 1goods

router.post('/carts', async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.body;
  
  const isCart = await Cart.find({ userId, postId });
  if(isCart){
    return res.status(400).send({
      result: "failure",
      msg: "이미 장바구니에 담긴 물품입니다."
      // 프론트에서 해당유저의 장바구니로 이동??
    })
  }

  const date = new Date();

  try {
    const cart = new Cart({
      title,
      price,
      imgUrl,
      quntity,
      date
    });

    const cartsList = await Cart.find({}).sort('-date');
    return res.status(200).send({
      result: 'sucess',
      title: cartsList.title,
      price: cartsList.price,
      totalPrice: cartsList.price * cartsList.goodsQuantity,
      title: cartsList.imgUrl,
      title: cartsList.goodsId,
      title: cartsList.goodsQuantity,
    });
  } catch {
    return res.status(400).send({
      result: 400,
      msg: '알 수 없는 오류가 떴습니다. 관리자에게 문의하세요.',
    });
  }
});

//장바구니 수정 API

//장바구니 삭제 API

module.exports = cartRouters;
