const express = require('express');
const app = express.Router();
const  users = require("../Controllers/Users/users")

app.get('/', users.users);
app.post('/bodyParser', users.bodyParser);
app.post('/validation', users.validation);

module.exports = app;