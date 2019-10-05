const express = require('express');
const app = express();
const port = 3000;
const bodyParser=require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// Maintain the all the routes in Routes folder
app.use("/user",require('./Routes/users'));

//Binds and listens for connections on the specified host and port

app.listen(port, () => console.log(`Example app listening on port ${port}!`));