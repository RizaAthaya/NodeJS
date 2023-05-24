const dbPool = require("../config/database");

const getAllMentor = () => {
  const sql = "SELECT * FROM mentor";
  return dbPool.execute(sql);
};

const getMentor = (idMentor) => {
  const sql = `SELECT * FROM mentor where id=${idMentor}`;
  return dbPool.execute(sql);
};

const getSearchMentor = (nameMentor) => {
    const sql = `SELECT * FROM mentor WHERE name LIKE '%${nameMentor}%'`
    return dbPool.execute(sql);
}

module.exports = {
  getAllMentor,
  getMentor,
  getSearchMentor
};
