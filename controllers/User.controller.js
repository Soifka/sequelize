const { User } = require('../models');

module.exports.createUser = async(req, res, next) => {
    try {
       const {body} = req;
       const createdUser = await User.create(body);
       return res.status(200).send(createdUser)
    } catch (error) {
        next(error);
    }
}

module.exports.findAll = async(req, res, next) => {
    try {
        const results = await User.findAll();
        return res.status(200).send(results);
    } catch (error) {
        next(error);
    }
}

module.exports.findByPk = async(req, res, next) => {
    try {
        const {params: {id}} = req;
        const foundUser = await User.findByPk(id);
        return res.status(200).send(foundUser);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteByPk = async(req, res, next) => {
    try {
        const {params: {id}} = req;
        const rowsCount = await User.destroy({
            where: {
                id
            }
        });
        if(rowsCount) {
            return res.status(200).send('Successfuly deleted');
        } else {
            return res.status(204).send(`User with id ${id} didn't find`);
        }
    } catch (error) {
        next(error);
    }
}

/*  Работаем со всей таблицей -->
module.exports.updateUser = async (req, res, next) => {
    try {
        const {params: {id}, body} = req;
        const result = await User.update(body, {
            where: {
                id
            }
        });
        console.log(result);
        return res.status(200).send();
    } catch (error) {
        next(error);
    }
}
*/

// находим конкретного юзера, а потом его апдейтим -->
module.exports.updateUser = async (req, res, next) => {
    try {
        const {params: {id}, body} = req;
        const foundUser = await User.findByPk(id);
        const result = await foundUser.update(body);
        return res.status(200).send(result);
    } catch (error) {
        next(error);
    }
}