const mongoose = require("mongoose");

const { Schema, models } = mongoose;

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});
const commentSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});
const moreSchema = new Schema({
  prep_time: {
    type: String,
    required: true,
  },
  cook_time: {
    type: String,
    required: true,
  },
  serving: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

const ItemSchema = new Schema({
  menuId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  thumbnail_image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    ingredients: {
      type: [ingredientSchema],
      required: true,
    },
    comments: {
      type: [commentSchema],
      required: true,
    },
    more: {
      type: [moreSchema],
      required: true,
    },
  },
});

const Item = mongoose.models.Item || mongoose.model("Item", ItemSchema);

module.exports = Item;
