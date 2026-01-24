const Joi = require('joi');

exports.createUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(1).optional(),
  phone_no: Joi.string().pattern(/^\+91\s[6-9]\d{9}$/).optional(),
  role: Joi.string().uppercase().valid('USER', 'ADMIN').default('USER'),
  is_active: Joi.number().default(1),
  password: Joi.string().min(6).required(),
});