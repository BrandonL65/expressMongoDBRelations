let CarModel = require("../models/CarModel.js");
let UserModel = require("../models/UserModel.js");

module.exports = {
  all: async (req,res) => {
    let all = await CarModel.find();
    res.json(all);
  },
  create: async (req,res) => {
    let newCar = new CarModel(req.body);
    let foundUser = await UserModel.find({name: req.params.username});
    foundUser = foundUser["0"];
    newCar.owner = foundUser;
    await newCar.save();

    foundUser.cars.push(newCar.id);
    let finalUpdatedUser = await foundUser.save();
    res.json({finalUpdatedUser});
  }
}
