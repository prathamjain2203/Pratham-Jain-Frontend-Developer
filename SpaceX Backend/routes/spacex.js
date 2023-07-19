const express = require("express");
const checkAuthorization = require("../middlewares/authorization");
const getAllCapsules = require("../controllers/spacex");

const router = express.Router();

router.get("/getAllCapsules", checkAuthorization, getAllCapsules);

module.exports = router;
