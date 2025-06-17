import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameBoard from "./pages/GameBoard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:mode" element={<GameBoard />} />
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center min-h-screen">
              <h2 className="text-2xl font-semibold">Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;