// db is an argument to this function so
// that we can make db queries inside
export default function initReservationController(db) {
  // const index = (request, response) => {

  //   db.User.findAll()
  //     .then((users) => {
  //       response.render('users/index', { users });
  //     })
  //     .catch((error) => console.log(error));
  // };

  const getReservation = async (request, response) => {
    response.render('reservation/makeRes');
  };

  const postReservation = async (request, response) => {
    try {
      const createReservation = await db.Reservation.create({
        name: request.body.name,
        drummerId: request.body.drummer_id,
        bossId: request.body.boss_id,
        date: request.body.date,
      });

      console.log(createReservation);
      response.send('yes');
    } catch (ex) {
      console.log(ex);
    }
  };

  const getReservationInfo = async (request, response) => {
    try {
      const info = await db.Reservation.findOne({
        where: {
          id: request.params.drummer_id,
        },
      });

      console.log('info', info);
      response.render('reservation/resByDrummer', { info });
    } catch (ex) {
      console.log(ex);
    }
  };
  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    getReservation,
    postReservation,
    getReservationInfo,
  };
}
