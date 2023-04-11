import React from 'react';

const Card = ({ card, onClick }) => {
    console.log(card)
    const cardStyle = {
        backgroundColor: card.isFlipped ? card.color : '#C5FFEA',
        color: card.isFlipped ? 'white' : 'black',
        border: '1px solid black',
        padding: '10px',
        borderRadius: '5px',
        margin: '10px',
        display: 'inline-block',
        width: '80px',
        height: '80px',
        boxSizing: 'border-box',
        cursor: 'pointer',
    };

    const contentStyle = {
        textAlign: 'center',
        fontSize: '20px',
        marginTop: '20px',
    };

    return (
        <div style={cardStyle} onClick={onClick}>
            <div style={contentStyle}>
                {card.isFlipped ? card.value : 'Punto'}
            </div>
        </div>
    );
};

export default Card;
