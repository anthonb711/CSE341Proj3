const routes = require('express').Router();
const controller = require('../controllers/availabilitiesController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getAvailabilities);
routes.post('/', /*requiresAuth(),*/ controller.addAvailabilities);

routes.get('/:id', /*requiresAuth(),*/ controller.getAvailabilityId);
//routes.put('/:id', /*requiresAuth(),*/ controller.updateAvailabilities);
//routes.delete('/:id', /*requiresAuth(),*/ controller.deleteAvailabilities);

module.exports = routes;
