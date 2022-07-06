// Import modules
const express = require('express');
const authController = require('../controllers/authController.js');
// Variables declaration
const router = express.Router();

router.post("/login", authController.login);
router.post("/signup", authController.signup);

module.exports = router;
