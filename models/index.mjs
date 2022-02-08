import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import initUserModel from './user.mjs';
import initReservationModel from './reservation.mjs'

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Reservation = initReservationModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;