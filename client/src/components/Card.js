import React from 'react';

const Card = ({ card }) => {
    return (
        <div className="card">
            <h2>{card.name}</h2>
            <img src={card.image} alt={card.name} />
            <p>{card.description}</p>
        </div>
    );
};

export default Card;