'use strict';

module.exports = {
async up (queryInterface, Sequelize) {
 const userType = [
      {
        name: 'drummer',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'boss',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('user_types', userType);

    const user = [
      {
        name: 'Tom',
        user_type : 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Harry',
        user_type : 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Sally',
        user_type : 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Bob',
        user_type : 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('users', user);


  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user_types', null, {});
    await queryInterface.bulkDelete('users', null, {});
  },
};
