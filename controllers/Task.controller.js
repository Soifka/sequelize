const {User, Task} = require('../models');

module.exports.createTask = async(req, res, next) => {
    try {
        const {body, userInstance} = req;
        const result = await userInstance.createTask(body);
        return res.status(201).send(result);
    } catch (error) {
        next(error);
    }
}

module.exports.getUserTasks = async(req, res, next) => {
    try {
        const {userInstance, pagination} = req;
        const tasks = await userInstance.getTasks({
            // limit: 5,
            // offset: 1
            ...pagination
        });
        return res.status(200).send(tasks);
    } catch (error) {
        next(error);
    }
}

module.exports.getUserCountTasks = async(req, res, next) => {
    try {
        const {userInstance} = req;
        const count = await userInstance.countTasks();
        return res.status(200).send(`${count}`);
        
        /* такой вариант вернет в качестве ответа объект с полем count, в котором будет количество задач из переменной count -->
        return res.status(200).send({count});  --> то же самое, что и return res.status(200).send({count: count}); */

    } catch (error) {
        next(error);
    }
}