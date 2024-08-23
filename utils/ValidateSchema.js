import Joi from "joi";

export const schoolSchema = Joi.object({
  name: Joi.string().min(1).required(),
  address: Joi.string().min(1).required(),
  longitude: Joi.number().required(),
  latitude: Joi.number().required(),
});

export const validateQueryPrams = Joi.object({
  longitude: Joi.number().required(),
  latitude: Joi.number().required(),
});
