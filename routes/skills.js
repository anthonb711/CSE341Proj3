const routes = require('express').Router();
const controller = require('../controllers/skillsController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getSkills);
routes.post('/', /*requiresAuth(),*/ controller.addSkill);

routes.get('/:id', /*requiresAuth(),*/ controller.getSkillById);
//routes.put('/:id', /*requiresAuth(),*/ controller.updateSkill);
//routes.delete('/:id', /*requiresAuth(),*/ controller.deleteSkill);
module.exports = routes;
