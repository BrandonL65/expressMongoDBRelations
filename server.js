const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

//Connect to db
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},() => {
  console.log("Connected");
})

//Middleware 
app.use(express.json());
app.use(cors());

//Routes 
const UserControls = require("./controllers/UserController.js");
const CarControls = require("./controllers/CarController.js");
app.get("/users", UserControls.all);
app.get("/users/create", UserControls.create);
app.get("/users/:username", UserControls.find);
app.get("/users/:username/cars", UserControls.getAllCars);

app.get("/cars", CarControls.all);
app.get("/cars/:username/create", CarControls.create);

//Start serv 
app.listen(PORT);