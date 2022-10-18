const mongoose = require("mongoose");

const DrinkSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
  Name: {
    type: String,
    required: true,
  },
  Instructions: {
    type: String,
  },
  Measurements: {
    type: String,
  },
  AlcoholIngredients: {
    type: [String], 
  },
  NonAlcoholIngredients: {
    type: [String],
  },
  Garnish: {
    type: String,
  },
  TypeOfGlass: {
    type: String,
  }

});

const Drink = mongoose.model("Drink", DrinkSchema);

module.exports = Drink;