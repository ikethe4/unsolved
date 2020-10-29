// *********************************************************************************
// html-controller.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
const router = require("express").Router();

// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================

// index route loads view.html
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/view.html"));
});

// add route loads the add.html page,
// where users can enter new characters to the db
router.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/add.html"));
});

// all route loads the all.html page,
// where all characters in the db are displayed
router.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/all.html"));
});

module.exports = router;
