import React from "react";
import Card from "./Card";

const Deck = ({ cards, deck }) => {
    return (
        <div className="deck">
            {deck.map((card) => (
                <Card key={card._id} card={card} />
            ))}
        </div>
    );
};

Deck.defaultProps = {
    cards: []
};

export default Deck;
