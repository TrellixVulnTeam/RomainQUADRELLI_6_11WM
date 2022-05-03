const express = require('express');

const router = express.Router();

const testController = require('../controllers/sample.js');

router.get("/", testController.SendSimpleMsg);

module.exports = router;
