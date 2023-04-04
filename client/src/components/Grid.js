import React, { useState } from "react";
import "../App.css";
import Cell from "./Cell.js";


const Grid = () => {
   /* const initialGrid = Array(11)
        .find(null)
        .map(() => Array(11).fill(null));

    const [grid, setGrid] = useState(initialGrid);

    const validMove = (x,y) => {
        if(grid[x][y]){
            return false;
        }
        for (let i = -1; i <=1; i++){
            for (let j = -1; j<= 1; j++){
                if(grid[x+1]&& grid[x+1][y+j]){
                    return true;
                }
            }
        }
        return false;
    }

    const handleCellDrop = (event, x, y) => {
        event.preventDefault();
        const value = event.dataTransfer.getData("value");
        const newGrid = [...grid];
        newGrid[x][y] = value;
        setGrid(newGrid);
    }

    const handleCellDragOver = event => {
        event.preventDefault();
    };

    console.log('grid', grid);

    const isGameOver = () => {
        for (let i = 0; i< 6; i++){
            let colCount = 0;
            let rowCount = 0;
            for (let j =0; j < 6; j++){
                if (grid[i][j]){
                    colCount++;
                }
                if (grid[j][i]){
                    rowCount++;
                }
            }
            if (colCount === 6 || rowCount === 6){
                return true;
            }
        }
        return false;
    };

    const renderGrid = () => {
        return grid.map((row, x) => {
            return row.map((cell, y) => {
                return (
                    <div
                        key={`${x}-${y}`}
                        className={`grid-cell ${ validMove(x, y) ? "valid-move" : ""}`}
                        onDrop={event => handleCellDrop(event, x, y)}
                        onDragOver={handleCellDragOver}
                    >
                        {cell}
                    </div>
                );
            });
        });
    };

    return <div className="grid-container">{renderGrid()}</div>
*/
}

export default Grid;