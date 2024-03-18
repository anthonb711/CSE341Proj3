const routes = require('express').Router();
const controller = require('../controllers/user_profileController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getProfiles);
routes.post('/', /*requiresAuth(),*/ controller.addUserProfile);

routes.get('/:id', /*requiresAuth(),*/ controller.getProfileById);
routes.put('/:id', /*requiresAuth(),*/ controller.updateProfileRecord);
routes.delete('/:id', /*requiresAuth(),*/ controller.deleteProfile);

module.exports = routes;
 