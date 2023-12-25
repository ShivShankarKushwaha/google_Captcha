const express = require('express');
const login_route = express.Router();
const {loginController} = require('../controllers/loginController');
login_route.route("/").post(loginController);

module.exports = login_route;