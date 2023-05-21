import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Recipes from "./Components/Recipes";
import Recipe from "./Components/Recipe";
import Create from "./Components/Create";
import Update from "./Components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="mainBody">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/allRecipes" element={<Recipes />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
