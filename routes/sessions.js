const routes = require('express').Router();
const controller = require('../controllers/sessionsController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getSessions);
routes.post('/', /*requiresAuth(),*/ controller.addSession);

routes.get('/:id', /*requiresAuth(),*/ controller.getSessionById);
routes.put('/:id', /*requiresAuth(),*/ controller.updateSession);
routes.delete('/:id', /*requiresAuth(),*/ controller.deleteSession);

module.exports = routes;
