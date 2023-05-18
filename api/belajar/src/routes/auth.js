const express = require("express");
const router = express.Router();
const auth = require('../controller/auth')

// CREATE - POST
router.post('/login', auth.loginUser)

module.exports = router;