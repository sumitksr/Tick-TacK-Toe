import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [showComputerOptions, setShowComputerOptions] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center transition-all duration-300 transform hover:scale-105">
        <h1 className="text-5xl font-extrabold mb-4 text-green-400 animate-pulse">Tic Tac Toe</h1>
        <h3 className="text-2xl mb-8 text-gray-300">Choose your mode</h3>

        {!showComputerOptions ? (
          <div className="flex flex-col gap-5 w-full max-w-xs">
            <button
              onClick={() => navigate("/game/friend")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg 
              text-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 
              focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
            >
              Play with Friend
            </button>

            <button
              onClick={() => setShowComputerOptions(true)}
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-6 rounded-lg 
              text-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-green-700 hover:to-teal-700 
              focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-75"
            >
              Play with Computer
            </button>
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
            <button
              onClick={() => navigate("/game/easy")}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-lg 
              text-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-yellow-600 hover:to-orange-600 
              focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75"
            >
              Easy
            </button>
            <button
              onClick={() => navigate("/game/medium")}
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-lg 
              text-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-orange-700 hover:to-red-700 
              focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-75"
            >
              Medium
            </button>
            <button
              onClick={() => navigate("/game/never-draw")}
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-6 rounded-lg 
              text-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-red-700 hover:to-pink-700 
              focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-75"
            >
              Never Draw
            </button>
          </div>
        )}
      </div>
    </div>
  );
}