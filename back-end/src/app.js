const express = require("express");
const path = require("path");
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// --------------------
// API routes placeholder
// --------------------
// const reservationsRouter = require("./routes/reservations");
// app.use("/api/reservations", reservationsRouter);

// --------------------
// Serve frontend
// --------------------
const frontendPath = path.join(__dirname, "../../front-end/build");
app.use(express.static(frontendPath));

// Catch-all route for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

module.exports = app;


