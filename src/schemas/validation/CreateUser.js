import Joi from "joi";

export const CreateUser = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().email().min(5),
  password: Joi.string().required().min(3),
  createdAt: Joi.string(),
});
