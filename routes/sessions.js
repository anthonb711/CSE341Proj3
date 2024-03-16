const routes = require('express').Router();
const controller = require('../controllers/sessionsController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getSessions);

module.exports = routes;
