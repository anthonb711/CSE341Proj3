const routes = require('express').Router();
const controller = require('../controllers/user_profileController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getProfiles);

module.exports = routes;
