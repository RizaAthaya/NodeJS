const scholarshipsModel = require("../models/scholarships");

const getAllScholarships = async (req, res) => {
  const { body } = req;
  if (body.email || body.username || body.addres) {
    return res.status(400).json({
      message: "ERROR 400: Your request doesn't need body",
    });
  }
  try {
    const [data] = await scholarshipsModel.getAllScholarships();
    res.status(200).json({
      message: "GET all scholarships success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "ERROR 500: Internal Server ERROR",
      err: error,
    });
  }
};

module.exports = {
  getAllScholarships,
};
