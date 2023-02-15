const { Router } = require('express');
const UserController = require('../controllers/User.controller');
const TaskController = require('../controllers/Task.controller');
const GroupController = require('../controllers/Group.controller');
const { getUserInstance, validateUser } = require('../middlewares/user.mv');
const { validateTask } = require('../middlewares/task.mv');


const router = Router();

router.post('/user', validateUser, UserController.createUser);
router.get('/users', UserController.findAll);
router.get('/user:userId', getUserInstance, UserController.findByPk);
router.get('/user/groups/:userId', UserController.getUserWithGroups);
router.delete('/user/:userId', UserController.deleteByPk);
router.put('/user/:userId', getUserInstance, UserController.updateUser);


router.post('/task/:userId', validateTask, getUserInstance, TaskController.createTask);
router.get('/tasks/:userId', getUserInstance, TaskController.getUserTasks);
router.get('/task-count/:userId', getUserInstance, TaskController.getUserCountTasks);


router.post('/groups', GroupController.createGroup);
router.put('/groups/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
router.get('/groups/:userId', getUserInstance, GroupController.getUserGroups);


module.exports = router;