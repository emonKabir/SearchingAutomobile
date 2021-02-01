const AutomobileSchema = require("../Models/DB_Model/AutomobileSchema");

function Automobile() {}

Automobile.postAutomobileInfo = function (object) {
  return new Promise(async (resolve, reject) => {
    const automobileInfo = new AutomobileSchema(object);
    try {
      const savedAutomobileInfo = await automobileInfo.save();
      console.log("jfkdjskl ", savedAutomobileInfo);
      resolve(savedAutomobileInfo);
    } catch (error) {
      reject({ message: error });
    }
  });
};

module.exports = Automobile;
