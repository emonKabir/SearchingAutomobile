//const Automobile = require("../Models/DB_Model/AutomobileSchema");
const Automobile = require("../Models/Automobile");
const { removeFile } = require("../Helper/helper");

exports.postAutomobileInfo = async function (req, res) {
  try {
    req.body.image_url = "images/" + req.file.filename;
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

exports.updateAutomobileInfo = async function (req, res) {
  try {
    if (req.file) {
      removeFile(req.body.image_url);
      req.body.image_url = "images/" + req.file.filename;
    }
    const result = await Automobile.updateAutomobileInfo(
      req.params.id,
      req.body
    );
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
