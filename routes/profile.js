const routes = require('express').Router();
const controller = require('../controllers/profileController');

routes.get('/', controller.getProfile);

module.exports = routes;
