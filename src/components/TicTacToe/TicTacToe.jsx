import { useState } from "react";
import "./TicTacToe.css";

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleItemClick = (index) => {
    if (!board[index] && !winner) {
      let newBoard = [...board];
      newBoard[index] = currentPlayer;

      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      setWinner(calculateWinner(newBoard));
    }
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  return (
    <div>
      <div id="utils">
        <span>Winner: {winner}</span>
        <span>Current Player: {currentPlayer}</span>
        <button className="btn" onClick={handleRestart}>
          Restart
        </button>
      </div>
      <div id="container">
        {board.map((item, index) => (
          <div
            key={index}
            className="item"
            onClick={() => handleItemClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
