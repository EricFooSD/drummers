module.exports = {
  async up(queryInterface, Sequelize) {
    const equipment = [
      {
        drummer_id: 1,
        equipment: 'flute',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 1,
        equipment: 'snare',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 2,
        equipment: 'cymbal',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 2,
        equipment: 'hi-hat',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('drummer_equipment', equipment);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('drummer_equipment', null, {});
  },
};
