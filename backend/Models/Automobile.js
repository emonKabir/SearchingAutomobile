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

Automobile.getSingleAutomobileInfo = function (_id) {
  return new Promise(async (resolve, reject) => {
    try {
      const AutomobileInfo = await AutomobileSchema.findById({ _id });
      resolve(AutomobileInfo);
    } catch (error) {
      reject({ message: error });
    }
  });
};

Automobile.deleteAutomobile = function (_id) {
  return new Promise(async (resolve, reject) => {
    try {
      const AutomobileInfo = await AutomobileSchema.findByIdAndDelete({ _id });
      resolve(AutomobileInfo);
    } catch (error) {
      reject({ message: error });
    }
  });
};

Automobile.updateAutomobileInfo = function (_id, updatableObject) {
  return new Promise(async (resolve, reject) => {
    try {
      const automobileInfo = await AutomobileSchema.findByIdAndUpdate(
        { _id },
        updatableObject
      );
      console.log("testing update", automobileInfo);
      resolve(automobileInfo);
    } catch (error) {
      reject({ message: error });
    }
  });
};

module.exports = Automobile;
