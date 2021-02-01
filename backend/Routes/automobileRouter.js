const router = require("express").Router();
const cors = require("cors");
const multer = require("multer");
const { postAutomobileInfo } = require("../Controllers/automobileController");
const { fileUploadConfig } = require("../Helper/helper");

const upload = multer({ storage: fileUploadConfig("title") });
router.use(cors());

router.post("/automobile", upload.single("image"), postAutomobileInfo);

module.exports = router;
