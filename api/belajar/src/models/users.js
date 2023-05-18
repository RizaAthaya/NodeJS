const dbPool = require("../config/database");
const bcrypt = require("bcrypt");

const getAllUsers = () => {
  const sql = "SELECT * FROM users";
  return dbPool.execute(sql);
};

const createNewUser = (body) => {
  const password = bcrypt.hashSync(body.password, bcrypt.genSaltSync(10));

  const sql = `INSERT INTO users (username, email, password)
  values ('${body.username}', '${body.email}', '${password}')`;
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
