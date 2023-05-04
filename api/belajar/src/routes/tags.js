const express = require("express");
const router = express.Router();
const tags = require('../controller/tags')

// SHOW/READ - GET
router.get("/cost", tags.getAllTagCost);
router.get("/country", tags.getAllTagCountry);
router.get("/level", tags.getAllTagLevel);

module.exports = router;
