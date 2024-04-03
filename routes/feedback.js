const routes = require('express').Router();
const controller = require('../controllers/feedbackController');


routes.get('/', controller.getFeedback);
routes.post('/', controller.addFeedback);

routes.get('/:id', controller.getFeedbackById);
routes.put('/:id', controller.updateFeedback);
routes.delete('/:id', controller.deleteFeedback);

module.exports = routes;
