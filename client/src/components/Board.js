import React from 'react';


function Board(props) {
    const boardSize = 11;
    const board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));

    /*const handleDragStart = (event) => {
        const cardId = event.target.id;
        event.dataTransfer.setData('cardId', cardId);
    }*/

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    const handleDrop = (event, row, col) => {
        const cardId = event.dataTransfer.getData('cardId');
        props.onCardDropped(cardId, row, col);
    }

    const renderBoard = () => {
        return board.map((row, rowIndex) => {
            return (
                <div key={rowIndex} className="w-[800px] flex flex-wrap">
                    {row.map((col, colIndex) => {
                        return (
                            <div key={colIndex}
                                 className="h-[80px] w-[60px] mr-3 mb-3 rounded-lg border-dashed border-2 border-slate-500"
                                 onDragOver={(event) => handleDragOver(event)}
                                 onDrop={(event) => handleDrop(event, rowIndex, colIndex)}
                            >
                            </div>
                        )
                    })}
                </div>
            )
        })
    }

    return (
        <div className="py-20 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-zinc-100 via-gray-900 to-slate-500 flex flex-col justify-center items-center">
            {renderBoard()}
        </div>
    )
}

export default Board;