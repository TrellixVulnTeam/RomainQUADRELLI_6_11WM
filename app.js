// Import modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');
const bodyParser = require('body-parser');

// Variables declaration
const app = express();

// Mongo connection
mongoose.connect('mongodb://piiquante:Eiy4ieMohP@127.0.0.1:27017/piiquante',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Deal with CORS
app.use(cors());
// Deal with body parsing
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

module.exports = app;
// Utiliser helmet pour gérer la sécurité des requêtes
