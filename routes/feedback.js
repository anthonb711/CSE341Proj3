const routes = require('express').Router();
const controller = require('../controllers/feedbackController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', /*requiresAuth(),*/ controller.getFeedback);
routes.post('/', /*requiresAuth(),*/ controller.addFeedback);

routes.get('/:id', /*requiresAuth(),*/ controller.getFeedbackById);
routes.put('/:id', /*requiresAuth(),*/ controller.updateFeedback);
//routes.delete('/:id', /*requiresAuth(),*/ controller.deleteFeedback);

module.exports = routes;
