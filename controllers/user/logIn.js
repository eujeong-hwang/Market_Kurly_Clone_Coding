const jwt = require("jsonwebtoken");
const User = require("../../schemas/user");
const bcrypt = require("bcrypt");

const logInFunc = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email)
  const user = await User.findOne({ email: email }).exec();
  if (!user || email !== user.email) {
    res.status(400).send({
      errorMessage: "이메일 또는 패스워드가 틀렸습니다",
    });
    return;
  }
  if (!bcrypt.compareSync(password, user.password)) {
    res.status(401).send({
      errorMessage: "이메일 또는 패스워드가 잘못됐습니다.",
    });
    return;
  }
  const token = jwt.sign({ userId: user.userId }, process.env.MY_SECRET_KEY);
  console.log("토큰", token);
  res.json({
    token,
  });
};

module.exports = logInFunc;
