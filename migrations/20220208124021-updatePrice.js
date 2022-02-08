module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'price', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.sequelize.query('UPDATE users SET PRICE = 10 WHERE id = 1');
    await queryInterface.sequelize.query('UPDATE users SET PRICE = 15 WHERE id = 2');
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.removeColumn('users', 'price');
  },
};
