const express = require('express');

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
});

module.exports = router;
