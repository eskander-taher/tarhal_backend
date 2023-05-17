const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityController");
const upload = require("../middleware/uploadMiddleware")

// GET all cities
router.get("/", cityController.getAllCities);

// GET a single city by ID
router.get("/:id", cityController.getCityById);

// POST create a new city
router.post("/", upload.array("images", 5), cityController.createCity);

// PUT update a city by ID
router.put("/:id", upload.array("images", 5), cityController.updateCity);

// DELETE a city by ID
router.delete("/:id", cityController.deleteCity);

module.exports = router;
