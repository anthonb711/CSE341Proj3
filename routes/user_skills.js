const routes = require('express').Router();
const controller = require('../controllers/user_skillsController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getUserSkills);

module.exports = routes;
