const express = require('express');
const app = express();
const port = 3000;

// Maintain the all the routes in Routes folder
app.use("/user",require('./Routes/users'));

//Binds and listens for connections on the specified host and port

app.listen(port, () => console.log(`Example app listening on port ${port}!`));