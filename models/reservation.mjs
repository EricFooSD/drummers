export default function initReservationModel(sequelize, DataTypes) {
  return sequelize.define(
    'reservations',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      drummerId: {
        type: DataTypes.INTEGER,
        // This links the the 2 tables
        references: {
          model: 'users',
          key: 'id',
        },
      },
      bossId: {
        type: DataTypes.INTEGER,
        // This links the the 2 tables
        references: {
          model: 'users',
          key: 'id',
        },
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    }
  );
}