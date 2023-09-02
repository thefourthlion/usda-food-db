const mongoose = require("mongoose");
const RecipesSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please provide name"] },
    instructions: {
      type: String,
      required: [true, "Please provide instructions"],
    },
    ingredients: {
      type: String,
      required: [true, "Please provide ingredients"],
    },
    amount: { type: String, required: [true, "Please provide amount"] },
    cost: { type: String, required: [true, "Please provide cost"] },
    servingCost: {
      type: String,
      required: [true, "Please provide servingCost"],
    },
    image: { type: String, required: [true, "Please provide image"] },
    timestamp: { type: String, required: [true, "Please provide timestamp"] },
  },
  { timestamps: true }
);
const Recipes = mongoose.model("Recipes", RecipesSchema);
module.exports = Recipes;
