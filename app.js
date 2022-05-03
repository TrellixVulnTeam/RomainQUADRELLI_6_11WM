const express = require('express');

const app = express();

const stuffRoutes = require('./routes/sample.js');

app.use('/api/auth/login', stuffRoutes);

module.exports = app;
// Utiliser helmet pour gérer la sécurité des requêtes
