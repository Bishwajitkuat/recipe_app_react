import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getOne = () => {
    axios.get(`http://localhost:3001/recipes/${id}`).then((response) => {
      setIsLoading(false);
      return setRecipe(response.data);
    });
  };
  useEffect(() => getOne(), []);

  return isLoading ? (
    <p>Loading.....</p>
  ) : (
    <div className="recipe">
      <div className="recipeHeading">
        <h2>{recipe.name}</h2>
        <img className="flagImg" src={recipe.flagUrl} alt="" />
        <p>{recipe.author}</p>
      </div>
      <div className="recipeBody">
        <div>
          <h3>Description</h3>
          <p>{recipe.description}</p>
          <h3>Preparation</h3>
          <p>{recipe.preparation}</p>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>
                {item.ingredient} : {item.amount}
              </li>
            ))}
          </ul>
        </div>
        <img className="recipeBodyImg" src={recipe.image} alt="" />
      </div>
    </div>
  );
};

export default Recipe;
