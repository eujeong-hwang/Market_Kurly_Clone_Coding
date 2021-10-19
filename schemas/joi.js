const Joi = require('joi');

const signUpSchema = Joi.object({
  userId: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9가-힣]{3,20}$/))
    .required(),
  email: Joi.string().email()
    // .pattern(
    //   new RegExp(
    //     /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    //   )
    // )
    .required(),
  password: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9가-힣]{3,12}$/))
    .required(),
  confirmPassword: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9가-힣]{3,12}$/))
    .required(),
});

module.exports = signUpSchema;
