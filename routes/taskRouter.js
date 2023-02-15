const { Router } = require('express');
const TaskController = require('../controllers/Task.controller');
const { getUserInstance } = require('../middlewares/user.mv');
const { validateTask } = require('../middlewares/task.mv');
const pagination = require('../middlewares/pagination.mv');

const taskRouter = Router();

taskRouter.post('/:userId', validateTask, getUserInstance, TaskController.createTask);
taskRouter.get('/:userId', getUserInstance, pagination, TaskController.getUserTasks);
taskRouter.get('/count/:userId', getUserInstance, TaskController.getUserCountTasks);


module.exports = taskRouter;