module.exports = app => {
    const cards = require("../controllers/card.controller.js");

    const router = require("express").Router();

    // Create one card
    router.post("/", cards.create);

    // Get all the cards
    router.get("/", cards.findAll);

    // Distribute cards to players
    router.post("/distribute", cards.distribute);

    // Get one card
    router.get("/:id", cards.findOne);

    // Update card state in db
    router.put("/:id", cards.update);

    // Verify if a player align 4 cards
    router.post("/checkWinner", cards.checkWinner);

    router.delete("/:id", cards.delete);

    router.delete("/", cards.deleteAll);

    app.use('/api/cards', router);
};