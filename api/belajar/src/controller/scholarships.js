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

const getAllDetailScholarships = async (req, res) => {
  const { body } = req;
  if (body.email || body.username || body.addres) {
    return res.status(400).json({
      message: "ERROR 400: Your request doesn't need body",
    });
  }
  try {
    const [data] = await scholarshipsModel.getAllDetailScholarships();
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

const getScholarships = async (req, res) => {
  const { body } = req;
  const { idScholarships } = req.params;
  if (body.email || body.username || body.addres) {
    return res.status(400).json({
      message: "ERROR 400: Your request doesn't need body",
    });
  }
  try {
    const [data] = await scholarshipsModel.getScholarships(idScholarships);
    res.status(200).json({
      message: `GET scholarship ${idScholarships} success`,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "ERROR 500: Internal Server ERROR",
      err: error,
    });
  }
};

const getSearchScholarships = async (req, res) => {
  const { body } = req;
  const { nameScholarships } = req.params;
  if (body.email || body.username || body.addres) {
    return res.status(400).json({
      message: "ERROR 400: Your request doesn't need body",
    });
  }
  try {
    const [data] = await scholarshipsModel.getSearchScholarships(
      nameScholarships
    );
    res.status(200).json({
      message: `GET scholarship ${nameScholarships} success`,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "ERROR 500: Internal Server ERROR",
      err: error,
    });
  }
};
const getFilterScholarships = async (req, res) => {
  const { body } = req;
  const { idLevel, idCost, idCountry } = req.params;
  if (body.email || body.username || body.address) {
    return res.status(400).json({
      message: "ERROR 400: Your request doesn't need body",
    });
  }
  try {
    const [data] = await scholarshipsModel.getFilterScholarships(
      idLevel,
      idCost,
      idCountry
    );
    res.status(200).json({
      message: `GET scholarships success`,
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
  getAllDetailScholarships,
  getScholarships,
  getSearchScholarships,
  getFilterScholarships,
};
