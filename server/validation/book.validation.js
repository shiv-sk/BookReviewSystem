const Joi = require("joi");
exports.bookCreateSchema = Joi.object({
    title:Joi.string().trim().lowercase().required(),
    author:Joi.string().trim().lowercase().required(),
    description:Joi.string().trim().required(),
    publishedYear:Joi.number().min(1000).max(9999).required(),
    genre:Joi.string().trim().lowercase().required(),
});


exports.bookUpdateSchema = Joi.object({
    title:Joi.string().trim().lowercase().optional(),
    author:Joi.string().trim().lowercase().optional(),
    description:Joi.string().trim().optional(),
    publishedYear:Joi.number().min(1000).max(9999).optional(),
    genre:Joi.string().trim().lowercase().optional(),
}).min(1);