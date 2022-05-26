const { tracksModel } = require("../models");

const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send({ data });
};

const getItem = async (req, res) => {
  const { id } = req;
  console.log(id);
  const data = await tracksModel.findOne(id);
  console.log(data);
  res.send({ data });
};

const createItem = async (req, res) => {
  const { body } = req;
  const data = await tracksModel.create(body);
  console.log(data);
  res.send({ algo: 1 });
};

const updateItem = (req, res) => {};

const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
