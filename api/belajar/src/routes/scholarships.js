const express = require("express");
const router = express.Router();
const mentor = require('../controller/scholarships')

// SHOW/READ - GET
router.get("/", mentor.getAllScholarships);

module.exports = router;
