"use strict";

const multer = require("multer");
const path = require("path");
const fs = require("fs");

exports.fileUploadConfig = function (name, type) {
  const max = 100;
  let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `./public/images`);
    },
    filename: (req, file, cb) => {
      cb(
        null,
        req.body[`${name}`] +
          "-" +
          Math.floor(Math.random() * Math.floor(max)) +
          path.extname(file.originalname)
      );
    },
  });
  return storage;
};

exports.removeFile = function (filepath) {
  fs.unlink("public/" + filepath, function (err) {
    if (err && err.code == "ENOENT") {
      // file doens't exist
      console.info("File doesn't exist, won't remove it.");
    } else if (err) {
      // other errors, e.g. maybe we don't have enough permission
      console.error("Error occurred while trying to remove file");
    } else {
      console.info(`removed`);
    }
  });
};
