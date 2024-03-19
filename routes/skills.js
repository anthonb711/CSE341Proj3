const routes = require('express').Router();
const controller = require('../controllers/skillsController');
const { requiresAuth } = require('express-openid-connect');

//routes.get('/', /*requiresAuth(),*/ controller.getSkills);

module.exports = routes;
