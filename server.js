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

//Routes 

//Start serv 
app.listen(PORT);