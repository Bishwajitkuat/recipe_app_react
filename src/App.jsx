import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Recipes from "./Components/Recipes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="mainBody">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/allRecipes" element={<Recipes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
