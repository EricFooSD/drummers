// db is an argument to this function so
// that we can make db queries inside
export default function initUsersController(db) {
  const index = (request, response) => {
    db.User.findAll()
      .then((users) => {
        response.render('users/listOfUsers', { users });
      })
      .catch((error) => console.log(error));
  };

  const findDrummerById = async (request, response) => {
    try {
      const drummer = await db.User.findOne({
        where: {
          id: request.params.id,
        },
      });
      response.render('users/singleDrummer', { drummer });
    } catch (ex) {
      console.log(ex);
    }
  };
  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
    findDrummerById,
  };
}
