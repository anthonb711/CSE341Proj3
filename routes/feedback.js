const routes = require('express').Router();
const controller = require('../controllers/feedbackController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getFeedback);

module.exports = routes;
