const routes = require('express').Router();
const controller = require('../controllers/skillsController');


routes.get('/', controller.getSkills);
routes.post('/', controller.addSkill);

routes.get('/:id', controller.getSkillById);
routes.put('/:id', controller.updateSkill);
routes.delete('/:id', controller.deleteSkill);

module.exports = routes;
