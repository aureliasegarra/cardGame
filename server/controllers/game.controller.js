const mongoose = require("mongoose");
const Game = require("../models/game.model")(mongoose);


exports.getDeck = async (req, res) => {
    try {
        const game = await Game.findOne().select('deck').populate('deck');
        console.log(game);
        res.send(game.deck);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'An error occurred while retrieving the deck.' });
    }
};

exports.newGame = (req, res) => {
    const game = new Game({
        players: [],
        deck: [],
        square: [[], [], [], []],
        currentPlayer: null,
        winner: null,
    });
    game.save((err, game) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        res.send({ id: game._id });
    });
};

exports.shuffleDeck = async (req, res) => {
    try {
        const game = await Game.findOne({ _id: req.params.id });
        if (!game) {
            return res.status(404).send({ message: "Partie introuvable" });
        }
        game.shuffleDeck();
        await game.save();
        res.send(game.deck);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.dealCards = async (req, res) => {
    try {
        const game = await Game.findOne({ _id: req.params.id });
        if (!game) {
            return res.status(404).send({ message: "Partie introuvable" });
        }
        const cards = game.dealCards(5);
        await game.save();
        res.send(cards);
    } catch (error) {
        res.status(500).send(error);
    }
};