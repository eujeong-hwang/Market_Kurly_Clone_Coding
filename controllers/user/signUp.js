const bcrypt = require("bcrypt");
const signUpSchema = require("../../schemas/joi");
const User = require('../../schemas/user')

const signUpFunc = async (req, res) => {
  try {
    const { userId, email, password, confirmPassword } = await signUpSchema.validateAsync(req.body);
    console.log('1')
    const existUsers = await User.find({ userId });

    if (password !== confirmPassword) {
        console.log('2')
      res.status(400).send({
        errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
      });
    } else if (existUsers.length) {
        console.log('3')
      res.status(400).send({
        errorMessage: "이미 사용중인 ID입니다.",
      });
    } else if (userId == password) {
        console.log('4')
      res.status(400).send({
        errorMessage: "비밀번호는 ID와 다른 값이여야 합니다.",
      });
    }
    console.log('5')
    const encryptedPassword = bcrypt.hashSync(password, 10)

    await User.create({ userId, email, password: encryptedPassword });

    res.status(201).send({result: 'success', msg: '회원가입을 환영합니다.'});
  } catch (err) {
    console.log(err);
    res.status(400).send({
      errorMessage: "요청한 데이터 형식이 올바르지 않습니다.",
    });
  }
};

module.exports = signUpFunc;
