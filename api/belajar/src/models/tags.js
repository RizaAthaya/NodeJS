const dbPool = require("../config/database");

const getAllTagCost = () => {
  const sql = "SELECT * FROM tag_cost";
  return dbPool.execute(sql);
};

const getAllTagCountry = () => {
  const sql = "SELECT * FROM tag_country";
  return dbPool.execute(sql);
};

const getAllTagLevel = () => {
  const sql = "SELECT * FROM tag_level";
  return dbPool.execute(sql);
};

module.exports = {
  getAllTagCost, getAllTagCountry, getAllTagLevel
};
