const routes = require('express').Router();
const controller = require('../controllers/indexController');
const { auth, requiresAuth } = require('express-openid-connect');
const config = require('../config/auth0');

routes.use(auth(config));

routes.get('/', controller.getHome);


module.exports = routes;
