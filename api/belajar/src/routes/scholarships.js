const express = require("express");
const router = express.Router();
const scholarships = require('../controller/scholarships');

// SHOW/READ - GET
router.get("/", scholarships.getAllScholarships);
router.get("/all", scholarships.getAllDetailScholarships);
router.get("/:idScholarships", scholarships.getScholarships)
router.get("/search/:nameScholarships", scholarships.getSearchScholarships)
router.get("/filter/:idLevel/:idCost/:idCountry", scholarships.getFilterScholarships)


module.exports = router;
