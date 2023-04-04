const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    suit: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
