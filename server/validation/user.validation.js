const Joi = require("joi");
exports.userRegisterSchema = Joi.object({
    name:Joi.string().trim().required(),
    email:Joi.string().email().trim().required(),
    password:Joi.string().trim().required(),
    role:Joi.string().valid("User" , "Admin").default("User").trim(),
})


exports.userLoginSchema = Joi.object({
    email:Joi.string().email().trim().required(),
    password:Joi.string().trim().required(),
});


exports.userUpdateSchema = Joi.object({
    name:Joi.string().trim().optional(),
    email:Joi.string().email().trim().optional(),
    password:Joi.string().trim().optional(),
}).min(1);