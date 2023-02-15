const { Router } = require('express');
const UserController = require('../controllers/User.controller');
const { getUserInstance, validateUser } = require('../middlewares/user.mv');

const userRouter = Router();

userRouter.post('/', validateUser, UserController.createUser);
userRouter.get('/', UserController.findAll);
userRouter.get('/:userId', getUserInstance, UserController.findByPk);
userRouter.get('/groups/:userId', UserController.getUserWithGroups);
userRouter.delete('/:userId', UserController.deleteByPk);
userRouter.put('/:userId', getUserInstance, UserController.updateUser);

module.exports = userRouter;