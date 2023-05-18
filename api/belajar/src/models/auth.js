const dbPool = require("../config/database");

const searchUser = (body) => {
    const sql = `SELECT * FROM users WHERE email = "${body.email}" LIMIT 1`
    return dbPool.execute(sql);
}

module.exports = {
    searchUser
}