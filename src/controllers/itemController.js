const Item = require("../models/ItemModel");

const getAllItems = async (req, res) => {
  //res.send("From item controller");

  const result = await Item.find().sort({ createdAt: -1 });
  res.status(200).json(result);
};

const getSearchedItems = async (req, res) => {
  const { q } = req.query;

  try {
    let items;
    if (q) {
      items = await Item.find({ name: { $regex: q, $options: "i" } });
    }
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "No items found" });
  }
};

const getSingleItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findById(id);
    res.status(200).json(item);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "No item found" });
  }
};

module.exports = { getAllItems, getSearchedItems, getSingleItem };