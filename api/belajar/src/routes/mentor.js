const express = require("express");
const router = express.Router();
const mentor = require('../controller/mentor')

// SHOW/READ - GET
router.get("/", mentor.getAllMentor);
router.get("/:idMentor", mentor.getMentor)
router.get("/search/:nameMentor", mentor.getSearchMentor)


module.exports = router;
