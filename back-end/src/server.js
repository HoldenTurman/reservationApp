const { PORT = 5001 } = process.env;
const app = require("./app"); // <-- no ./src
const knex = require("./db/connection");

knex.migrate
  .latest()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });


