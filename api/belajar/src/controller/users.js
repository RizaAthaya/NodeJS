const getAllUsers = (req, res) => {
  const data = {
    id: 1,
    nama: "Reza Ahmad",
    email: "reza@gmail.com",
  };
  res.json({
    message: "GET all users success",
    data: data,
  });
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
      nama: 'Riza',
      email: "riza@gail.com",
    },
  });
};

module.exports = { getAllUsers, createNewUsers, updateUser, deleteUser };
