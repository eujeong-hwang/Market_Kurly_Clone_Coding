const bcrypt = require("bcrypt");
const signUp = require("../../schemas/joi");
const User = require("../../schemas/user");

exports.signUp = async (req, res) => {
  
  try {
    let {email} = await signUp.emailSchema.validateAsync(req.body);
    let existemail = await User.find({ email });
    if (existemail.length) {
      return res.status(406).send({
        errorMessage: "이미 사용중인 email입니다.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(403).send({
      msg: "형식에 맞지 않는 이메일입니다.",
  })
  return;
  }
  try {
    let { userId, email, password, passwordConfirm, name } =
      await signUp.signUpSchema.validateAsync(req.body);
      
    if (password !== passwordConfirm) {
      
      res.status(400).send({
        msg: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
      });
    } 
    
    const encryptedPassword = bcrypt.hashSync(password, 10);

    await User.create({ userId, email, password: encryptedPassword, name });
    
    res.status(201).send({ result: "success", msg: "회원가입을 환영합니다." });
  } catch (err) {
    console.log(err);
    res.status(402).send({
      msg: "필수 사항을 모두 채워 주세요",
    });
  }
};

exports.checkDup = async (req, res) => {
  try {
    console.log(req.body)
    const { userId } = await signUp.userIdSchema.validateAsync(req.body);
    const existUsers = await User.find({ userId });
    if (existUsers.length) {
      res.status(400).send({
        errorMessage: "이미 사용중인 ID입니다.",
      });
    } else {
      res.status(200).send({
        message: "사용가능한 ID입니다."
      })
    }
  } catch (err) {
    console.log(err);
    res.status(403).send({
      msg: "ID의 형식을 확인해주세요!",
  })
}
}
