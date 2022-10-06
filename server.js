const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
import {DB_URL} from '@env'

const app = express();

app.use(express.json());

mongoose.connect(DB_URL)
.then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
