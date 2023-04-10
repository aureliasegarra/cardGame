module.exports = app => {
    const games = require("../controllers/game.controller");
    const router = require("express").Router();

    // Route pour créer une nouvelle partie
    router.post('/new-game', games.newGame);

    // Route pour récupérer le deck de la partie
    router.get('/deck', games.getDeck);

    // Route pour mélanger le deck
    router.post('/shuffle-deck', games.shuffleDeck);

    // Route pour distribuer les cartes
    router.post('/deal-cards', games.dealCards);

    app.use("/api/games", router);
}


