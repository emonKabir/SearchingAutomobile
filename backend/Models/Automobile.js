const AutomobileSchema = require("../Models/DB_Model/AutomobileSchema");

function Automobile() {}

Automobile.postAutomobileInfo = function (object) {
  return new Promise(async (resolve, reject) => {
    const automobileInfo = new AutomobileSchema(object);
    try {
      const savedAutomobileInfo = await automobileInfo.save();
      resolve(savedAutomobileInfo);
    } catch (error) {
      reject({ message: error });
    }
  });
};

Automobile.getAutomobileInfo = function () {
  return new Promise(async (resolve, reject) => {
    try {
      const AutomobileInfo = await AutomobileSchema.find();
      resolve(AutomobileInfo);
    } catch (error) {
      reject({ message: error });
    }
  });
};

module.exports = Automobile;
