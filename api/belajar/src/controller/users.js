const userModel = require("../models/users");

const getAllUsers = async (req, res) => {
  const { body } = req;

  if (body.email || body.username || body.addres) {
    return res.status(400).json({
      message: "ERROR 400: Your request doesn't need body",
      // error: errorHandler.getErrorMessage(err)
    });
  } else {
    try {
      const [data] = await userModel.getAllUsers();
      res.status(200).json({
        message: "GET all users success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "ERROR 500: Internal Server ERROR",
        err: error,
      });
    }
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.username || !body.number) {
    return res.status(400).json({
      message: "ERROR 400: Bad request",
      err: err,
    });
  }

  try {
    await userModel.createNewUser(body);
    res.status(201).json({
      message: "ERROR CREATE new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "ERROR 500: Internal Server ERROR",
      err: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await userModel.updateUser(body, idUser)
    res.json({
      message: 'UPDATE user success',
      data: {
        id: idUser,
        ...body,
      }
    })
  } catch (error) {
    res.status(500).json({
      message: "ERROR 500: Internal Server ERROR",
      err: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await userModel.deleteUser(idUser)
    res.json({
      message: "DELETE user success",
      id: idUser
    }); 
  } catch (error) {
    res.status(500).json({
      message: "ERROR 500: Internal Server ERROR",
      err: error,
    });
  }
};

module.exports = { getAllUsers, createNewUsers, updateUser, deleteUser };
