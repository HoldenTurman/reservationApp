const path = require("path");
const express = require("express");

// Serve static frontend files
const frontendPath = path.join(__dirname, "../../front-end/build"); 
app.use(express.static(frontendPath));

// Catch-all route to serve index.html for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

module.exports = app;

