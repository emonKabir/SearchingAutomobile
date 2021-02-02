const mongoose = require("mongoose");

const autoMobileSchema = mongoose.Schema({
  title: String,
  brand: String,
  image_url: String,
  details: String,
});

module.exports = mongoose.model("automobile", autoMobileSchema);
