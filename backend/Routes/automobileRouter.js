const router = require("express").Router();
const cors = require("cors");
const multer = require("multer");
const { fileUploadConfig } = require("../Helper/helper");
const upload = multer({ storage: fileUploadConfig("title") });
const {
  postAutomobileInfo,
  getAutomobileInfo,
  updateAutomobileInfo,
  getSingleAutomobileInfo,
} = require("../Controllers/automobileController");

router.use(cors());

router.post("/", upload.single("image"), postAutomobileInfo);
router.get("/", getAutomobileInfo);
router.get("/:id", getSingleAutomobileInfo);
router.put("/:id", upload.single("image"), updateAutomobileInfo);
//router.delete("/:id",  updateAutomobileInfo);

module.exports = router;
