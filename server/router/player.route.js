module.exports = app => {

    const players = require("../controllers/player.controller.js");
    const router = require("express").Router();

    router.post("/", players.create);

    app.use("/api/players", router);
}

/*const express = require('express');
const router = express.Router();

const Player = require('../models/players');

// CREATE ONE PLAYER
router.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const player = new Player({ username, email, password });
        await player.save();
        res.json({ message: 'Players registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to register player' });
    }
});*/

// GET ONE PLAYER
/*router.get('/:id', getPlayer, (req, res) => {
    res.json(res.player);
});*/

//module.exports = router;