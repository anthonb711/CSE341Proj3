const routes = require('express').Router();
const controller = require('../controllers/availabilitiesController');


routes.get('/', controller.getAvailabilities);
routes.post('/', controller.addAvailabilities);

routes.get('/:id', controller.getAvailabilityId);
routes.put('/:id', controller.updateAvailability);
routes.delete('/:id', controller.deleteAvailability);

module.exports = routes;
