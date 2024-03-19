const routes = require('express').Router();
const controller = require('../controllers/user_profileController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getUserProfiles);
routes.post('/', /*requiresAuth(),*/ controller.addUserProfile);

routes.get('/:id', /*requiresAuth(),*/ controller.getUserProfileById);
routes.put('/:id', /*requiresAuth(),*/ controller.updateUserProfile);
routes.delete('/:id', /*requiresAuth(),*/ controller.deleteUserProfile);

module.exports = routes;
