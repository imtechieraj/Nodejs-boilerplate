const express = require('express');
const app = express.Router();
const  users = require("../Controllers/users")

app.get('/', users.users);

module.exports = app;