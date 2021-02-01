const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("./Routes/automobileRouter"));
app.use(express.static(__dirname + "/public"));

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    const PORT = process.env.PORT || 3304;
    app.listen(PORT, () => {
      console.log(`app is running on ${PORT}`);
    });
  }
);
