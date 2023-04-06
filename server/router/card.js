const express = require('express');
const router = express.Router();

// Import Card model
const Card = require('../models/card.model');

// GET all cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET a single card
router.get('/:id', getCard, (req, res) => {
    res.json(res.card);
});

// CREATE a new card
router.post('/', async (req, res) => {
    const card = new Card({
        name: req.body.name,
        value: req.body.value
    });

    try {
        const newCard = await card.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// UPDATE a card
router.patch('/:id', getCard, async (req, res) => {
    if (req.body.name != null) {
        res.card.name = req.body.name;
    }

    if (req.body.value != null) {
        res.card.value = req.body.value;
    }

    try {
        const updatedCard = await res.card.save();
        res.json(updatedCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a card
router.delete('/:id', getCard, async (req, res) => {
    try {
        await res.card.remove();
        res.json({ message: 'Card deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Middleware to get a card by ID
async function getCard(req, res, next) {
    let card;

    try {
        card = await Card.findById(req.params.id);
        if (card == null) {
            return res.status(404).json({message: 'Card not found'});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    // call the next middleware function
    next();
}

// 404 ROUTE
router.use((req, res) => {
    res.status(404).json('No such endpoint');
});

module.exports = router;