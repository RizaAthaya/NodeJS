const userModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await userModel.getAllUsers();
    res.json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server ERROR",
      err: error,
    });
  }
};

const createNewUsers = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new user success",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  console.log(idUser);
  res.json({
    message: "UPDATE user success",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "DELETE user success",
    data: {
      id: idUser,
      nama: "Riza",
      email: "riza@gail.com",
    },
  });
};

module.exports = { getAllUsers, createNewUsers, updateUser, deleteUser };
