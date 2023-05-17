import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const getOne = () => {
    axios.get(`http://localhost:3001/recipes/${id}`).then((response) => {
      console.log(response.data.ingredients);
      return setRecipe(response.data);
    });
  };
  useEffect(() => getOne(), []);
  return (
    <div>
      <h2>{recipe.name}</h2>
      <img className="flagImg" src={recipe.flagUrl} alt="" />
      <p>{recipe.author}</p>
      <img src={recipe.image} alt="" />
      <h3>Description</h3>
      <p>{recipe.description}</p>
      <h3>Preparation</h3>
      <p>{recipe.preparation}</p>
      <h3>Ingredients</h3>
      {recipe.ingredients
        ? recipe.ingredients.map((item, index) => (
            <div key={index}>
              <p>
                {item.ingredient}: {item.amount}
              </p>
            </div>
          ))
        : "not found"}
    </div>
  );
};

export default Recipe;
