import React from "react";
import Card from "./Card";

const Deck = ({ deck }) => {
    return (
        <div className="flex-auto ml-6 mt-6">
            {deck.map((card) => (
                <Card key={card._id} card={card} />
            ))}
        </div>
    );
};

/*Deck.defaultProps = {
    cards: []
};*/

export default Deck;
