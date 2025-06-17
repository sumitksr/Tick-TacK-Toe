import React from 'react';

export default function Board({ squares, onClick }) {
  return (
    <div className="grid grid-cols-3 gap-2 bg-gray-200 p-2 rounded-lg">
      {squares.map((val, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          className="w-24 h-24 text-4xl font-bold border-2 border-gray-400 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          {val}
        </button>
      ))}
    </div>
  );
}
