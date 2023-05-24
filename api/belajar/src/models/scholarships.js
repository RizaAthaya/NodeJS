const dbPool = require("../config/database");

const getAllScholarships = () => {
  const sql = "SELECT * FROM scholarships";
  return dbPool.execute(sql);
};

const getAllDetailScholarships = () => {
  const sql =
    "select scholarships.name, scholarships.provider, scholarships.description, scholarships.university, scholarships.open_registration, scholarships.close_registration, tag_cost.name as tag_cost, tag_country.name as tag_country, tag_level.name as tag_level from scholarships inner join tag_cost on tag_cost.id = scholarships.tag_cost_id inner join tag_country on tag_country.id = scholarships.tag_cost_id inner join tag_level on tag_level.id = scholarships.tag_cost_id";
  return dbPool.execute(sql);
};

const getScholarships = (idScholarships) => {
  const sql = `SELECT * FROM scholarships where id=${idScholarships}`;
  return dbPool.execute(sql);
};

const getSearchScholarships = (nameScholarships) => {
  const sql = `SELECT * FROM scholarships WHERE name LIKE '%${nameScholarships}%'`;
  return dbPool.execute(sql);
};
const getFilterScholarships = (idLevel, idCost, idCountry) => {
  let lev = "";
  let cos = "";
  let cou = "";
  let jml = 0;

  if (idLevel != 0) {
    lev = `having tag_level_id = ${idLevel}`;
    jml++;
  }
  if (idCost != 0) {
    if (jml === 0) {
      cos = `having tag_cost_id = ${idCost}`;
    } else {
      cos = `and tag_cost_id = ${idCost}`;
    }
    jml++;
  }
  if (idCountry != 0) {
    if (jml === 0) {
      cou = `having tag_country_id = ${idCountry}`;
    } else {
      cou = `and tag_country_id = ${idCountry}`;
    }
  }

  const sql = `select scholarships.*, tag_cost.name as tag_cost, tag_country.name as tag_country, tag_level.name as tag_level from scholarships inner join tag_cost on tag_cost.id = scholarships.tag_cost_id inner join tag_country on tag_country.id = scholarships.tag_cost_id inner join tag_level on tag_level.id = scholarships.tag_cost_id ${lev} ${cos} ${cou} `;
  console.log(sql)
  jml = 0;
  return dbPool.execute(sql);
};

module.exports = {
  getAllScholarships,
  getAllDetailScholarships,
  getScholarships,
  getSearchScholarships,
  getFilterScholarships,
};
