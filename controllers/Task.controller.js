const {User, Task} = require('../models');

module.exports.createTask = async(req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        const user = await User.findByPk(userId);
        const result = await user.createTask(body);
        return res.status(201).send(result);
    } catch (error) {
        next(error);
    }
}

module.exports.getUserTasks = async(req, res, next) => {
    try {
        const {params: {userId}} = req;
        const user = await User.findByPk(userId);
        const tasks = await user.getTasks();
        return res.status(200).send(tasks);
    } catch (error) {
        next(error);
    }
}

module.exports.getUserCountTasks = async(req, res, next) => {
    try {
        const {params: {userId}} = req;
        const user = await User.findByPk(userId);
        const count = await user.countTasks();
        return res.status(200).send(`${count}`);
    } catch (error) {
        next(error);
    }
}