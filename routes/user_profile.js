const routes = require('express').Router();
const controller = require('../controllers/user_profileController');


routes.get('/', controller.getUserProfiles);
routes.post('/', controller.addUserProfile);

routes.get('/:id', controller.getUserProfileById);
routes.put('/:id', controller.updateUserProfile);
routes.delete('/:id', controller.deleteUserProfile);

module.exports = routes;
