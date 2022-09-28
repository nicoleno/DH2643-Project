const mongoose = require("mongoose");

const DrinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    default: '',
  },
  alcoholicIngredients: {
    type: [String], // måste vara String[], hitta lösning
  },
  nonAlcoholicIngredients: {
    type: [String], // måste vara String[], hitta lösning
  },
});

const Drink = mongoose.model("Drink", DrinkSchema);

module.exports = Drink;