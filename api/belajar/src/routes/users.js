const express = require("express");

const router = express.Router();
const users = require('../controller/users')

// CREATE - POST
router.post('/', users.createNewUsers)


// SHOW/READ - GET
router.get("/", users.getAllUsers);

//UPDATE - PATCH
router.patch('/:idUser', users.updateUser)

//DELETE - DELETE
router.delete('/:idUser', users.deleteUser)

module.exports = router;
