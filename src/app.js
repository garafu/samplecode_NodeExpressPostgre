var config = require("./config.json");
var express = require("express");
var app = express();

app.use(require("./routes/index.js"));

app.listen(config.app.PORT)