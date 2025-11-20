const { PORT = 5001 } = process.env;
const app = require("./app");
const knex = require("./db/connection");

async function startServer() {
  try {
    // Run migrations on startup
    console.log("Running migrations...");
    await knex.migrate.latest();

    // Run seeds (optional, remove if you don't want to seed every startup)
    console.log("Running seeds...");
    await knex.seed.run();

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    await knex.destroy();
    process.exit(1);
  }
}

startServer();



