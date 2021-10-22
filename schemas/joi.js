const Joi = require('joi');

exports.userIdSchema = Joi.object({
  userId: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9가-힣]{6,}$/))
    .required(),
});

exports.emailSchema = Joi.object({
  email: Joi.string().email().required(),
}).unknown();

exports.passwordSchema = Joi.object({
  password: Joi.string()
    .pattern(new RegExp(/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,}$/))
    .required(),
}).unknown();

exports.signUpSchema = Joi.object({
  userId: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9가-힣]{6,}$/))
    .required(),

  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp(/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,}$/))
    .required(),
  passwordConfirm: Joi.string()
    .pattern(new RegExp(/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,}$/))
    .required(),
  name: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z0-9가-힣]{2,12}$/))
    .required(),
});

// module.exports = signUpSchema;
