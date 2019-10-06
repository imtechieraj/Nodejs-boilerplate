const Joi = require('@hapi/joi');

const ValidationResult = (...args) => {
    let schema = Joi.object().keys(args[0])
    let result = Joi.validate(args[1], schema)
    if (result.error === null) {
        args[2](null, true)
    } else {
        let res = { Status: false, StatusCode: 422, message: result.error.details[0].message }
        args[2](res)
    }
}

module.exports = {
    ValidationResult
}