// Import modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');
const saucesRoutes = require('./routes/saucesRoutes.js');
const bodyParser = require('body-parser');
const path = require('path');
// Variables declaration
const app = express();

// Mongo connection
mongoose.connect('mongodb+srv://piiquante:Eiy4ieMohP@cluster0.38ai76a.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Deal with CORS
app.use(cors());
// Deal with body parsing
app.use(bodyParser.json());
// Declare images folder
app.use('/images', express.static(path.join(__dirname, 'images')));
// Declare routes
app.use('/api/auth', authRoutes);
app.use('/api/sauces', saucesRoutes);

module.exports = app;
// Utiliser helmet pour gérer la sécurité des requêtes
