const express = require("express");

const { dataHandler } = require("../controllers/serverController");

const router = express.Router();

router.route("/").post(dataHandler);

module.exports = router;
