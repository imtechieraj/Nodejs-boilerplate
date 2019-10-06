const { validationSchema } = require("../../Models/users");
const { ValidationResult } = require("../components");
const users = (req, res) => {
    res.send('Hello World!')
};

const bodyParser = (req, res) => {
    console.log(req.body);
    res.send(req.body);
};

// This is the Serverside Validation controller function. 
const validation = (req, res) => {
    ValidationResult(validationSchema, req.body, (err, result) => {
        if (err) {
            return res.send(err)
        } res.send(result)
    })
}

module.exports = {
    users,
    bodyParser,
    validation
}