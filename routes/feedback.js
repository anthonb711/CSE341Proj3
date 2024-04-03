const routes = require('express').Router();
const controller = require('../controllers/feedbackController');
const { requiresAuth } = require('express-openid-connect');

routes.get('/', controller.getFeedback);
routes.post('/', controller.addFeedback);

routes.get('/:id', controller.getFeedbackById);
routes.put('/:id', controller.updateFeedback);
routes.delete('/:id', controller.deleteFeedback);

module.exports = routes;
