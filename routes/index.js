const routes = require('express').Router();
const controller = require('../controllers/indexController');
const { auth, requiresAuth } = require('express-openid-connect');
const config = require('../config/auth0');

routes.use(auth(config));

routes.get('/', controller.getHome);

routes.use('/profile', requiresAuth(), require('./profile'));
routes.use('/members', requiresAuth(), require('./members'));
routes.use('/family', requiresAuth(), require('./family'));
routes.use('/ordinance', requiresAuth(), require('./ordinance'));
// routes.use('/calling',   requiresAuth(), require('./calling')  );

module.exports = routes;
