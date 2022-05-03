// Import modules
const express = require('express');
const authController = require('../controllers/authentification.js');
// Variables declaration
const router = express.Router();

router.get("/", testController.SendSimpleMsg);

module.exports = router;
