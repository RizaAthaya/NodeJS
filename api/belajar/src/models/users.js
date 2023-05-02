const dbPool = require("../config/database");

const getAllUsers = () => {
  const sql = "SELECT * FROM users";
  return dbPool.execute(sql);
};

const createNewUser = (body) => {
  const sql = `INSERT INTO users (name, email, number) 
  values ('${body.username}', '${body.email}', '${body.number}')`;
  return dbPool.execute(sql);
};

const updateUser = (body, idUser) => {
  const sql = `UPDATE users SET name='${body.username}', email='${body.email}', number='${body.number}' 
                WHERE id=${idUser}`;
  return dbPool.execute(sql);
};

const deleteUser = (idUser) => {
  const sql = `DELETE FROM users WHERE id=${idUser}`;
  return dbPool.execute(sql);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
