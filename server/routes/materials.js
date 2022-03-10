const express = require("express");
const { getMaterials } = require("../controllers/materials");
const {findMaterialById} = require('../controllers/materials')

const Material = require("../models/Material");

const router = express.Router();

const advancedResults = require("../middlewares/advancedResults");

router.route("/").get(advancedResults(Material), getMaterials);

router.route("/findmaterialbyid").post(findMaterialById);

module.exports = router;
