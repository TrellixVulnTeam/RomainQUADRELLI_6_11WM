// Import modules
const express = require('express');
const authController = require('../controllers/authController.js');
const saucesController = require('../controllers/saucesController.js');
const multer = require ('../controllers/multController.js');

// Variables declaration
const router = express.Router();

// Get all sauces
router.get("/", authController.verifyToken, saucesController.getAllSauce);
// Get specific sauce
router.get("/:id", authController.verifyToken, saucesController.getSpecificSauce);
// Add sauce
router.post("/", multer, authController.verifyToken, saucesController.addSauce);
// Update specific sauce
router.put("/:id", multer, authController.verifyToken, saucesController.updateSpecificSauce);
// Like / Dislike sauce
router.post("/:id/like", authController.verifyToken, saucesController.likeDislikeSauce);
// Delete specific sauce
router.delete("/:id", authController.verifyToken, saucesController.deleteSpecificSauce);

module.exports = router;
