const dbPool = require("../config/database");

const checkEmail = (email) => {
    const sql = `SELECT * FROM users WHERE email='${email}' LIMIT 1;`
    return dbPool.execute(sql);
}
module.exports = {
    checkEmail,
}