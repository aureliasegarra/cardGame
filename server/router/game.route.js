const express = require('express');
const router = express.Router();
const gameController = require('../controllers/game.controller');

// Route pour créer une nouvelle partie
router.post('/new-game', gameController.newGame);

// Route pour récupérer le deck de la partie
router.get('/deck', gameController.getDeck);

// Route pour mélanger le deck
router.post('/shuffle-deck', gameController.shuffleDeck);

// Route pour distribuer les cartes
router.post('/deal-cards', gameController.dealCards);

module.exports = router;
