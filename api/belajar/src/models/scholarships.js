const dbPool = require("../config/database");

const getAllScholarships = () => {
    const sql = "SELECT * FROM scholarships";
    return dbPool.execute(sql);
};

module.exports = {
    getAllScholarships,
}