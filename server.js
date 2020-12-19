//Dependencies 
const fs = require('fs')
const http = require('http')
const express = require('express');
const path = require("path");

// Express setup App
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'))

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});