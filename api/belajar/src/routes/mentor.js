const express = require("express");
const router = express.Router();
const mentor = require('../controller/mentor')

// SHOW/READ - GET
router.get("/", mentor.getAllMentor);

module.exports = router;
