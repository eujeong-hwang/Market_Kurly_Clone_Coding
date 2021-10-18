const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");
const User = require("../schemas/user");
const signUpFunc = require("../controllers/user/signUp");
const logInFunc = require("../controllers/user/logIn");
const bcrypt = require("bcrypt");

//회원가입
router.post("/users/signUp", signUpFunc);

//로그인
router.post("/users/login", logInFunc);

//로그인 인증
router.get("/users/me", authMiddleware, async (req, res) => {
  console.log("사용자 정보", res.locals);
  const { user } = res.locals; //중간 데이터를 설정할 수 있으며, 해당 데이터를 뷰에서 사용할수 있음.
  res.send({
    user: {
      email: user.email,
      nickname: user.nickname,
    },
  });
});

module.exports = router;
