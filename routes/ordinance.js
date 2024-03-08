const routes = require('express').Router();
const controller = require('../controllers/ordinanceController');

routes.get('/', controller.getOrdinances);
routes.get('/:id', controller.getOrdinanceById);

routes.post('/', controller.addOrdinance);
routes.put('/:id', controller.updateOrdinance);
routes.delete('/:id', controller.deleteOrdinance);

module.exports = routes;
