const express = require('express');
const app = express();

app.use("/login", require('./login_route'));
module.exports = app;