const Joi = require('@hapi/joi');

let validationSchema = {
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    email: Joi.string().email().required(),
    phone_no: Joi.string().required(),
}

module.exports={
    validationSchema
}