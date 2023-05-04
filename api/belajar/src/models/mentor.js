const dbPool = require("../config/database");

const getAllMentor = () => {
    const sql = "SELECT * FROM mentor";
    return dbPool.execute(sql);
};

module.exports = {
    getAllMentor,
}