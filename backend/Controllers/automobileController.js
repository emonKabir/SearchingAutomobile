//const Automobile = require("../Models/DB_Model/AutomobileSchema");
const Automobile = require("../Models/Automobile");

exports.postAutomobileInfo = async function (req, res) {
  try {
    req.body.image = "images/" + req.file.filename;
    const result = await Automobile.postAutomobileInfo(req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

exports.getAutomobileInfo = async function (req, res) {
  try {
    const result = await Automobile.getAutomobileInfo();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
