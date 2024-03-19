const routes = require('express').Router();
const controller = require('../controllers/user_skillsController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getUserSkills);
//routes.post('/', /*requiresAuth(),*/ controller.addUserSkills);

//routes.get('/:id', /*requiresAuth(),*/ controller.getUserSkillsById);
//routes.put('/:id', /*requiresAuth(),*/ controller.updateUserSkills);
//routes.delete('/:id', /*requiresAuth(),*/ controller.deleteUserSkills);

module.exports = routes;
