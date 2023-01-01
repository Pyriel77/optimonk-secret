const express = require("express");
const router = express.Router();

const {
  getAllSecrets,
  getSecret,
  createSecret,
  updateSecret,
  deleteSecret,
} = require("../controllers/secrets.js");

router.get("/", getAllSecrets);

router.get("/:hash", getSecret);

router.post("/", createSecret);

router.put("/:hash", updateSecret);

router.delete("/:hash", deleteSecret);

module.exports = router;
