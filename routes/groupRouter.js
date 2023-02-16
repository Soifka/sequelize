const { Router } = require('express');
const GroupController = require('../controllers/Group.controller');
const { getUserInstance } = require('../middlewares/user.mv');

const groupRouter = Router();

groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
groupRouter.get('/:userId', getUserInstance, GroupController.getUserGroups);
groupRouter.get('/get-users/:groupId', GroupController.getGroupWithUsers);
groupRouter.delete('/:userId/:groupId', getUserInstance, GroupController.deleteUserFromGroup);


module.exports = groupRouter;