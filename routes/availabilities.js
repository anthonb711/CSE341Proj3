const routes = require('express').Router();
const controller = require('../controllers/availabilitiesController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getAvailabilities);

module.exports = routes;
