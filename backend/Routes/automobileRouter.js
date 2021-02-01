const router = require("express").Router();
const cors = require("cors");
const multer = require("multer");
const {
  postAutomobileInfo,
  getAutomobileInfo,
} = require("../Controllers/automobileController");
const { fileUploadConfig } = require("../Helper/helper");

const upload = multer({ storage: fileUploadConfig("title") });
router.use(cors());

router.post("/", upload.single("image"), postAutomobileInfo);
router.get("/", getAutomobileInfo);

module.exports = router;
