const Joi = require("joi");

exports.userIdSchema = Joi.object({
  userId: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9가-힣]{3,20}$/))
    .required(),
});

exports.emailSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),
}).unknown();

exports.signUpSchema = Joi.object({
  userId: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9가-힣]{3,20}$/))
    .required(),

  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9가-힣]{3,12}$/))
    .required(),
  passwordConfirm: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9가-힣]{3,12}$/))
    .required(),
  name: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9가-힣]{3,12}$/))
    .required(),
});

// module.exports = signUpSchema;
