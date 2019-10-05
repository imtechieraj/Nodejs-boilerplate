const express = require('express');
const app = express.Router();
const  users = require("../Controllers/users")

app.get('/', users.users);
app.post('/bodyParser', users.bodyParser);

module.exports = app;