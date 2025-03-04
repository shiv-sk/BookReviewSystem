const Joi = require("joi");
exports.reviewCreateSchema = Joi.object({
    userId:Joi.string().hex().length(24).required(),
    bookId:Joi.string().hex().length(24).required(),
    reviewText:Joi.string().min(20).max(1000).required(),
    rating:Joi.number().min(1).max(5).required()
})