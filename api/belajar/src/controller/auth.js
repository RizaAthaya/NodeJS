const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const userModel = require("../models/users");
const authModels = require("../models/auth");
const { generate } = require("../utils/token");
// const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.password) {
    return res.status(400).json({
      message: "ERROR 400: Bad request",
      error: "Missing email or password",
    });
  }

  try {
    const user = await authModels.searchUser(body);
    console.log(user.password);
    const [data] = await authModels.searchUser(body);
    console.log(data[0].password)
    // const data[0] = [data]
    // console.log(password)

    if (!user) {
      return res.status(401).json({
        message: "ERROR 401: Unauthorized",
        error: "Invalid email or password",
      });
    }

    bcrypt.compare(body.password, data[0].password, function (err, result) {
      if (result) {
        const userToken = generate(data[0].id);
        return res.status(200).json({
          message: "Login successful",
          token: userToken,
          user: data,
        });
        // Lanjutkan logika Anda setelah verifikasi password berhasil
      } else {
        return res.status(401).json({
          message: "ERROR 401: Unauthorized",
          error: "Invalid email or password",
        });
        // Lanjutkan logika Anda setelah verifikasi password gagal
      }
    });

    // if (body.password === user.data.password) {
    //   // Password match
    //   // Perform login or generate token
    //   const userToken = generateToken(data.id);
    //   return res.status(200).json({
    //     message: "Login successful",
    //     user: user,
    //     token: userToken,
    //   });
    // } else {
    //   // Password doesn't match
    //   return res.status(401).json({
    //     message: "ERROR 401: Unauthorized",
    //     error: "Invalid email or password",
    //   });
    // }
  } catch (error) {
    return res.status(500).json({
      message: "ERROR 500: Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  loginUser,
};
