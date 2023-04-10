import React from 'react';

const Card = ({ color, points, isFlipped, onClick }) => {
    const cardStyle = {
        backgroundColor: isFlipped ? color : 'gray',
        color: isFlipped ? 'white' : 'black',
        border: '1px solid black',
        padding: '10px',
        borderRadius: '5px',
        margin: '10px',
        display: 'inline-block',
        width: '100px',
        height: '140px',
        boxSizing: 'border-box',
        cursor: 'pointer',
    };

    const contentStyle = {
        textAlign: 'center',
        fontSize: '32px',
        marginTop: '20px',
    };

    return (
        <div style={cardStyle} onClick={onClick}>
            <div style={contentStyle}>
                {isFlipped ? points : '?'}
            </div>
        </div>
    );
};

export default Card;
