const mongoose = require("mongoose");
const Game = require("../models/game.model");

exports.getDeck = (req, res) => {
    const deck = Game.getDeck();
    res.send(deck);
};

exports.newGame = (req, res) => {
    const players = req.body.players;
    const game = new Game(players);
    res.send(game);
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