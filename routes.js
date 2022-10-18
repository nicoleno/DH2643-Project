const express = require("express");
const drinkModel = require("./model");
const app = express();

app.post("/add_drink", async (request, response) => {
    const drink = new drinkModel(request.body);
  
    try {
      await drink.save();
      response.send(drink);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/drinks", async (request, response) => {
    const drinks = await drinkModel.find({});
    console.log("hej");
    console.log(drinks);
    try {
      response.send({drinks});
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;