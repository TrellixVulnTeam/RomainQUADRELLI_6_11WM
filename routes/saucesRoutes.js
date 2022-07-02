// Import modules
const express = require('express');
const saucesController = require('../controllers/saucesController.js');
const multer = require ('../controllers/multController.js');

// Variables declaration
const router = express.Router();

// Get all sauces
router.get("/", saucesController.getAllSauce);
// Get specific sauce
router.get("/:id", saucesController.getSpecificSauce);
// Add sauce
router.post("/", multer, saucesController.addSauce);
// Update specific sauce
router.put("/:id", multer, saucesController.updateSpecificSauce);
// Delete specific sauce
router.delete("/:id", saucesController.deleteSpecificSauce);

module.exports = router;
