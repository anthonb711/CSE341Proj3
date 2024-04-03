const routes = require('express').Router();
const controller = require('../controllers/user_skillsController');


routes.get('/', controller.getUserSkills);
routes.post('/', controller.addUserSkill);

routes.get('/:id', controller.getUserSkillsById);
routes.put('/:id', controller.updateUserSkills);
routes.delete('/:id', controller.deleteUserSkills);

module.exports = routes;
