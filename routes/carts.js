const express = require('express');
const router = express.Router();
const ctrlCarts = require('../controllers/ctrl.carts')

//에러 핸들 필요함
// 400,401,404,500

//장바구니 조회 API
router.get('/carts', ctrlCarts.allCart);

//장바구니 등록 API
// 기존에 담긴 물품이라면?
// 일단 title 한개에 > goods
router.post('/carts/:postId', ctrlCarts.addCart);

//장바구니 수정 API
// 프론트에서 +또는 -를 누를 떄의 값을 받아와서 데이터베이스에 업데이트
router.put('/cart', ctrlCarts.updateCart);

//장바구니 삭제 API
router.delete('/cart', ctrlCarts.delCart);

module.exports = router;