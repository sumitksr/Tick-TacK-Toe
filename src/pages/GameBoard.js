import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import calculateWinner from "../utils/calculateWinner";
import { NavLink } from "react-router-dom";

export default function GameBoard() {
  const { mode } = useParams();
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  useEffect(() => {
    if (winner) return;
    if (mode !== "friend" && !xIsNext) {
      // Computer's turn: pick a random empty square
      const empties = squares
        .map((v, i) => (v === null ? i : null))
        .filter((i) => i !== null);
      if (empties.length > 0) {
        const aiMove = empties[Math.floor(Math.random() * empties.length)];
        const next = [...squares];
        next[aiMove] = "O";
        setTimeout(() => {
          setSquares(next);
          setXIsNext(true);
        }, 300);
      }
    }
  }, [squares, xIsNext, mode, winner]);

  const handleClick = (i) => {
    if ((mode !== "friend" && !xIsNext) || squares[i] || winner) return;
    const next = [...squares];
    next[i] = xIsNext ? "X" : "O";
    setSquares(next);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-900 text-white p-4">
      <NavLink to="/">
        <h1 className="text-5xl font-extrabold mb-8 text-green-400 animate-pulse cursor-pointer">
          Tic Tac Toe
        </h1>
      </NavLink>
      <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105">
        <p className="mb-3 text-xl text-gray-300">
          Mode:{" "}
          <span className="font-bold text-blue-400 text-2xl">
            {mode.toUpperCase()}
          </span>
        </p>
        <p className="mb-6 text-2xl font-semibold">
          {winner ? (
            <span className="text-red-400 animate-bounce">
              Winner: {winner}
            </span>
          ) : (
            <span className="text-yellow-400">Next: {xIsNext ? "X" : "O"}</span>
          )}
        </p>

        <div className="grid grid-cols-3 gap-3 bg-gray-700 p-3 rounded-lg border-4 border-gray-600">
          {squares.map((val, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className="w-24 h-24 text-5xl font-extrabold rounded-lg flex items-center justify-center
              bg-gray-800 text-white shadow-lg transform transition-all duration-200 hover:scale-105 hover:bg-gray-700
              focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50
              relative overflow-hidden group"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {val}
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>

        <button
          onClick={resetGame}
          className="mt-8 px-10 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg 
        text-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-blue-600 
        focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}
