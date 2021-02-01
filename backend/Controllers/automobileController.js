//const Automobile = require("../Models/DB_Model/AutomobileSchema");
const Automobile = require("../Models/Automobile");

exports.postAutomobileInfo = async function (req, res) {
  try {
    console.log("req body ", req.body);
    req.body.image = "images/" + req.file.filename;
    const result = await Automobile.postAutomobileInfo(req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
