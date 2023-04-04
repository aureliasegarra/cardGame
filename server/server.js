const express = require('express');
const mongoose = require('mongoose');

// Création de l'application Express
const app = express();

// Configuration de la connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/punto', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB : '));
db.once('open', function() {
    console.log('Connecté à la base de données MongoDB');
});

// Création d'un modèle pour les cartes
const cardSchema = new mongoose.Schema({
    value: Number,
    suit: String,
    image: String
});

const Card = mongoose.model('Card', cardSchema);

// Route pour récupérer la liste des cartes
app.get('/cards', async (req, res) => {
    const cards = await Card.find();
    res.json(cards);
});

// Route pour ajouter une carte
app.post('/cards', async (req, res) => {
    const card = new Card({
        value: req.body.value,
        suit: req.body.suit,
        image: req.body.image
    });
    await card.save();
    res.json(card);
});

// Route pour supprimer une carte
app.delete('/cards/:id', async (req, res) => {
    const { id } = req.params;
    await Card.findByIdAndDelete(id);
    res.sendStatus(204);
});

// Démarrage de l'application Express sur le port 3000
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
