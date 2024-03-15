const routes = require('express').Router();
const controller = require('../controllers/indexController');
//const { auth, requiresAuth } = require('express-openid-connect');
//const config = require('../config/auth0');

//routes.use(auth(config));

routes.get('/', controller.getHome);
routes.use('/profile', /*requiresAuth(),*/ require('./profile'));
routes.use('/user_profile', /*requiresAuth(),*/ require('./user_profile'));
routes.use('/user_skills', /*requiresAuth(),*/ require('./user_skills'));
routes.use('/skills', /*requiresAuth(),*/ require('./skills'));
routes.use('/availabilities', /*requiresAuth(),*/ require('./availabilities'));
routes.use('/sessions', /*requiresAuth(),*/ require('./sessions'));
routes.use('/feedback', /*requiresAuth(),*/ require('./feedback'));

module.exports = routes;
