const routes = require('express').Router();
const controller = require('../controllers/membersController');

routes.get('/', controller.getMembers);
routes.get('/:id', controller.getMemberById);

routes.post('/', controller.addMember);
routes.put('/:id', controller.updateMemberRecord);
routes.delete('/:id', controller.deleteMember);

module.exports = routes;
