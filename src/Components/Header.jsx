import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>Recipe</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/allRecipes"}>Recipes</Link>
          </li>
          <li>
            <Link to={"/create"}>Add recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
