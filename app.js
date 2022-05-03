// Import modules
const express = require('express');
const authRoutes = require('./routes/authRoutes.js');
// Variables declaration
const app = express();

app.use('/api/auth/login', authRoutes);

module.exports = app;
// Utiliser helmet pour gérer la sécurité des requêtes
