const Joi = require("joi");
exports.bookCreateSchema = Joi.object({
    title:Joi.string().trim().lowercase().required(),
    author:Joi.string().trim().lowercase().required(),
    description:Joi.string().trim().max(1000).required(),
    publishedYear:Joi.number().min(1000).max(9999).required(),
    genre:Joi.string().trim().lowercase().required(),
});


exports.bookUpdateSchema = Joi.object({
    title:Joi.string().trim().lowercase().optional(),
    author:Joi.string().trim().lowercase().optional(),
    description:Joi.string().trim().max(1000).optional(),
    publishedYear:Joi.number().min(1000).max(9999).optional(),
    genre:Joi.string().trim().lowercase().optional(),
}).min(1);