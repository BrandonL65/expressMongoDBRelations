const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let UserSchema = new Schema({
  name: String,
  age: String,
  cars: [{
    type: Schema.Types.ObjectId,
    ref: "Car"
  }]
})

module.exports = mongoose.model("User", UserSchema);