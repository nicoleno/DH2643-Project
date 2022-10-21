const mongoose = require("mongoose");

const DrinkSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
  },
  measurements: {
    type: String,
  },
  alcoholIngredients: {
    type: [String], 
  },
  nonAlcoholIngredients: {
    type: [String],
  },
  garnish: {
    type: String,
  },
  typeOfGlass: {
    type: String,
  }

});

const Drink = mongoose.model("Drink", DrinkSchema);

module.exports = Drink;