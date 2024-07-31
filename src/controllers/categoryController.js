const Item = require("../models/ItemModel");
const Category = require("../models/CategoryModel");

const getCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const categoryData = await Category.findOne({ name: category });

    if (!categoryData) {
     return res.status(404).json({ message: "No category found" });
    }

    //const items =await Item.find({menuId:categoryData.menuId });
    const items = await Item.find({name:categoryData.name });

     console.log(categoryData);
    console.log(categoryData.name);
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in category search" });
  }
};

module.exports = { getCategory };
