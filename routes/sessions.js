const routes = require('express').Router();
const controller = require('../controllers/sessionsController');

routes.get('/', controller.getSessions);
routes.post('/', controller.addSession);

routes.get('/:id', controller.getSessionById);
routes.put('/:id', controller.updateSession);
routes.delete('/:id', controller.deleteSession);

module.exports = routes;
