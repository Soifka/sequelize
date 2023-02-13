'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, {    // --> each task belongs to some user
        foreignKey: 'userId'
      });  
    }
  }
  Task.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    isDone: {
      field: 'is_done',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    deadline: {
      field: 'deadline',
      type: DataTypes.DATE,
    validate: {
      isDate: true
    }
  }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    underscored: true
  });
  return Task;
};


/*
Как создать связь между таблицами:
1. На уровне таблиц иметь колонки с внешним ключом (implement foreign key)
2. Прописать ассоциации на уровне моделей (метод associate в модели)
*/