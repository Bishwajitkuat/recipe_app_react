import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const getAll = () => {
    axios
      .get("http://localhost:3001/recipes")
      .then((response) => setRecipes(response.data));
  };
  // getAll();
  useEffect(() => getAll(), []);

  return (
    <div className="recipes">
      {recipes.length ? (
        recipes.map((item) => (
          <RecipeCard
            key={item.id}
            flagUrl={""}
            recipeImgUrl={item.image}
            recipeName={item.name}
            id={item.id}
            recipeDescription={item.description}
          />
        ))
      ) : (
        <p>No recipe found</p>
      )}
    </div>
  );
};

export default Recipes;
