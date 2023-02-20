'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', 
      [
        {
          "first_name": "Mary",
          "last_name": "Doe",
          "email": "m.doe@email.com",
          "password": "jhhafgfhcfhsd",
          "birthday": "1988-01-08",
          "gender": "female",
          "created_at": "2023-02-20 18:18:45",
          "updated_at": "2023-02-20 18:18:45"
        },
        {
          "first_name": "Jane",
          "last_name": "Doe",
          "email": "j.doe@email.com",
          "password": "dsvbfbfbbg",
          "birthday": "1988-01-08",
          "gender": "female",
          "created_at": "2023-02-20 18:18:45",
          "updated_at": "2023-02-20 18:18:45"
        },
        {
          "first_name": "John",
          "last_name": "Doe",
          "email": "john.doe@email.com",
          "password": "qweertyyuio",
          "birthday": "1988-01-08",
          "gender": "male",
          "created_at": "2023-02-20 18:18:45",
          "updated_at": "2023-02-20 18:18:45"
        }
      ], {}
      ) 
  },

  // Этот метод (down) практически никогда не используется, его можно вообще удалить -->
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
