const mongoose = require("mongoose");

const autoMobileSchema = mongoose.Schema({
  title: String,
  brand: String,
  image: String,
  fuel_capacity: String,
  max_speed: String,
  details: String,
});

module.exports = mongoose.model("automobile", autoMobileSchema);