const express = require('express')
const route = express.Router();

const controllers = require('../controllers/index');

route.post("/create", controllers.create);

module.exports = route;