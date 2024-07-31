const mongoose = require("mongoose");

const { Schema, models } = mongoose;

const categorySchema = new Schema({
  name: {
    name: String,
    menuId: Number,
  },
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

module.exports = Category;
