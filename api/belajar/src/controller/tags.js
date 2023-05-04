const tagsModel = require("../models/tags");

const getAllTagCost = async (req, res) => {
  const { body } = req;
  if (body.email || body.username || body.addres) {
    return res.status(400).json({
      message: "ERROR 400: Your request doesn't need body",
    });
  }
  try {
    const [data] = await tagsModel.getAllTagCost();
    res.status(200).json({
      message: "GET all tag cost success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "ERROR 500: Internal Server ERROR",
      err: error,
    });
  }
};

const getAllTagCountry = async (req, res) => {
  const { body } = req;
  if (body.email || body.username || body.addres) {
    return res.status(400).json({
      message: "ERROR 400: Your request doesn't need body",
    });
  }
  try {
    const [data] = await tagsModel.getAllTagCountry();
    res.status(200).json({
      message: "GET all tag country success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "ERROR 500: Internal Server ERROR",
      err: error,
    });
  }
};

const getAllTagLevel = async (req, res) => {
  const { body } = req;
  if (body.email || body.username || body.addres) {
    return res.status(400).json({
      message: "ERROR 400: Your request doesn't need body",
    });
  }
  try {
    const [data] = await tagsModel.getAllTagLevel();
    res.status(200).json({
      message: "GET all tag level success",
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
  getAllTagCost,
  getAllTagCountry,
  getAllTagLevel,
};
