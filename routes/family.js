const routes = require('express').Router();
const controller = require('../controllers/familyController');

routes.get('/', controller.getFamilies);
routes.get('/:id', controller.getFamilyById);

routes.post('/', controller.addFamily);

routes.put('/:id', controller.updateFamily);

routes.delete('/:id', controller.deleteFamily);

module.exports = routes;
