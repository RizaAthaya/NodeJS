const dbPool = require ('../config/database')

const getAllUsers = () => {
    const sql = 'SELECT * FROM users'
    return dbPool.execute(sql);
};

module.exports = {
    getAllUsers
}
