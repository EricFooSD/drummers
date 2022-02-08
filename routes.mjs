import db from './models/index.mjs';

// import the controller
import initUsersController from './controllers/UsersController.mjs';

import initReservationController from './controllers/ReservationController.mjs';

export default function bindRoutes(app) {
  // pass in the db for all items callbacks
  const usersController = initUsersController(db);
  const reservationController = initReservationController(db);

  app.get('/drummer/:id', usersController.findDrummerById);
  app.get('/drummer', usersController.index);
  app.get('/reservation', reservationController.getReservation);
  app.post('/reservation', reservationController.postReservation);
  app.get('/reservation/:drummer_id', reservationController.getReservationInfo);
}
