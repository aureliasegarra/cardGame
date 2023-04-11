const mongoose = require("mongoose");
const Card = require("../models/card.model")(mongoose);

exports.findAll = (req, res) => {
    Card.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving cards."
            });
        });

};

exports.createDeck = async (req, res) => {
    try {
        const count = await Card.countDocuments();
        if (count === 0) {
            const colors = ["red", "green", "blue", "yellow"];
            const points = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            const cards = [];

            colors.forEach(color => {
                points.forEach(value => {
                    cards.push({
                        color,
                        value: value,
                        isFlipped: true
                    });
                    cards.push({
                        color,
                        value: value,
                        isFlipped: true
                    });
                });
            });

            await Card.insertMany(cards);
            console.log("Deck created successfully!");
        } else {
            const allCards = await Card.find();
            console.log("Deck already exists!");
        }
    } catch (error) {
        console.error(error);
    }
}

exports.create = (req, res) => {
    if (!req.body.value) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const card = new Card({
        value: req.body.value,
        color: req.body.color,
    });

    card
        .save(card)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Card."
            });
        });
};

exports.distribute = async (req, res) => {
    try {
        const players = await Player.find(); // récupère tous les joueurs

        // vérifie qu'il y a au moins 2 joueurs pour jouer
        if (players.length < 2) {
            return res.status(400).json({ message: "Il doit y avoir au moins 2 joueurs pour jouer!" });
        }

        const cards = await Card.find(); // récupère toutes les cartes
        const shuffledCards = shuffle(cards); // mélange les cartes

        // distribue les cartes en les alternant entre les joueurs
        let playerIndex = 0;
        for (let i = 0; i < shuffledCards.length; i++) {
            const card = shuffledCards[i];
            const player = players[playerIndex];
            player.cards.push(card); // ajoute la carte au joueur

            // met à jour la carte pour indiquer qu'elle est dans la main d'un joueur
            await Card.findByIdAndUpdate(card._id, { isDealt: true, player: player._id });

            playerIndex = (playerIndex + 1) % players.length; // passe au joueur suivant
        }

        // enregistre les joueurs avec leurs cartes mises à jour
        for (let i = 0; i < players.length; i++) {
            await players[i].save();
        }

        return res.json({ message: "Les cartes ont été distribuées avec succès!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la distribution des cartes!" });
    }
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Card.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Card with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Card with id=" + id });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Card.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Card with id=${id}. Maybe Card was not found!`
                });
            } else res.send({ message: "Card was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Card with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Card.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Card with id=${id}. Maybe Card was not found!`
                });
            } else {
                res.send({
                    message: "Card was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Card with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Card.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Cards were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all cards."
            });
        });
};

exports.checkWinner = async (req, res) => {
    const { playerId, cardId, row, col } = req.body;
    const player = await Player.findById(playerId);
    const card = await Card.findById(cardId);

    if (!player || !card) {
        return res.status(404).send({ message: "Player or card not found" });
    }

    // Update game board with played card
    const game = await Game.findOne({ isActive: true });
    game.board[row][col] = card;
    await game.save();

    // Update card state
    const { color, points, isFlipped } = req.body;
    await Card.findByIdAndUpdate(cardId, {
        color,
        points,
        isFlipped,
        row,
        col,
    });

    // Check if player has aligned four cards
    const playerCards = await Card.find({ playerId });
    const alignedCards = checkAlignment(game.board, playerCards, player.color);
    if (alignedCards.length === 4) {
        // Update player as winner
        await Player.findByIdAndUpdate(playerId, { hasWon: true });

        // End game
        game.isActive = false;
        await game.save();
    }

    res.send({ message: "Card played successfully" });
};

