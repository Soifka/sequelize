const { TASK_SCHEMA } = require("../schemas/task.schema");

module.exports.validateTask = async(req, res, next) => {
    try {
        const {body} = req;
        const validatedBody = await TASK_SCHEMA.validate(body);
        if(validatedBody) {
            next();
        }
    } catch (error) {
        next(error);
    }
}