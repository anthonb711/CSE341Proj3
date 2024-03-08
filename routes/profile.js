const routes = require('express').Router();
const controller = require('../controllers/profileController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', requiresAuth(), controller.getProfile);

module.exports = routes;
