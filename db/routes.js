const express = require("express");
const drinkModel = require("./model");
const app = express();


const NewDrink = mongoose.model("Drink", DrinkSchema, 'owndrinks');
const Drink = mongoose.model("Drink", DrinkSchema, 'drinks');


app.post("/add_drink", async (request, response) => {
  const drink = new NewDrink(request.body);
  console.log(drink);

  try {
    await drink.save();
    response.send(drink);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/drinks", async (request, response) => {
  const drinks = await Drink.find({});
  console.log("hej");
  console.log(drinks);
  try {
    response.send({ drinks });
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;