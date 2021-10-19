const Cart = require('../schemas/Cart');

const ctrlCarts = {
  allCart: async (req, res) => {
    const { userId } = req.body;
    try {
      const cartAllList = await Cart.find({ userId });
      return res.status(200).send({
        result: 'sucess',
        cartAllList: cartAllList,
        msg: '장바구니를 모두 불러왔습니다.',
      });
    } catch {
      return res.status(400).send({
        result: 400,
        msg: '알 수 없는 오류가 발생했습니다. 관리자에게 문의하세요.',
      });
    }
  },

  addCart: async (req, res) => {
    const { postId } = req.params;
    const { userId } = req.body.userId;
    const { postInfo } = req.body.postInfo;
    // ㄴ 장바구니에 해당 물품의 정보를 담으려면 일단 보고있는 물품의 정보를 알아야 한다.
    // 유정님 + 유빈님께 어떤 정보를 주고받을 지 상의 필요

    // 장바구니에 담긴 물품에 대해 장바구니 담기를 눌렀을 때
    const isCart = await Cart.find({ userId, postId });
    if (isCart) {
      return res.status(400).send({
        result: 'failure',
        msg: '이미 장바구니에 담긴 물품입니다.',
        // 프론트에서 해당유저의 장바구니로 이동??
      });
    }


    // 언제 담은건지 알아두기 위한 값
    const date = new Date();

    try {
      const cart = await new Cart({
        title: postInfo.title,
        price: postInfo.price,
        imgUrl: postInfo.imgUrl,
        quantity: postInfo.quantity,
        date: date,
      });
      return res.status(200).send({
        result: 'success',
        data: cart,
        msg: '장바구니에 정상적으로 등록되었습니다.',
      });
    } catch {
      return res.status(400).send({
        result: 400,
        msg: '알 수 없는 오류가 발생했습니다. 관리자에게 문의하세요.',
      });
    }
  },

  updateCart: async (req, res) => {
    const { chgInfo } = req.body;

    // 예외 상황1 : 갯수 1개에서 0개로
    if (chgInfo.quntity == 0) {
      await Cart.deleteOne({
        userId: chgInfo.userId,
        title: chgInfo.title,
      });
      return res.status(200).send({
        result: 'success',
        msg: '해당 물품이 장바구니에서 삭제되었습니다.',
      });
    }

    try {
      const updateCart = await Cart.updateOne(
        {
          userId: chgInfo.userId,
          title: chgInfo.title,
        },
        {
          $set: {
            quantity: chgInfo.quantity,
          },
        }
      );
      return res.status(200).send({
        result: 'success',
        data: updateCart,
        msg: '수정이 완료되었습니다.',
      });
    } catch {
      return res.status(400).send({
        result: 'failure',
        msg: '알 수 없는 오류가 발생했습니다. 관리자에게 문의하세요.',
      });
    }
  },

  delCart: async (req, res) => {
    const { targetInfo } = req.body;

    try {
      await Cart.deleteOne({ targetInfo });
      return res.status(200).send({
        result: 'success',
        msg: '해당 물품이 장바구니에서 삭제되었습니다.',
      });
    } catch {
      return res.status(400).send({
        result: 'failure',
        msg: '알 수 없는 오류가 발생했습니다. 관리자에게 문의하세요.',
      });
    }
  },
};

module.exports = ctrlCarts;