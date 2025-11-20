const express = require("express");
const path = require("path");
const app = express();

// --------------------
// Middleware
// --------------------
app.use(express.json());

// --------------------
// API Routes
// --------------------
// Example placeholder:
// const reservationsRouter = require("./routes/reservations");
// app.use("/api/reservations", reservationsRouter);

// --------------------
// Serve Frontend
// --------------------
const frontendPath = path.join(__dirname, "../../front-end/build");
app.use(express.static(frontendPath));

// Catch-all route to support React Router paths
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Export app for server.js
module.exports = app;

