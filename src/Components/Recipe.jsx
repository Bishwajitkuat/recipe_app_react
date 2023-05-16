import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const getOne = () => {
    axios.get(`http://localhost:3001/recipes/${id}`).then((response) => {
      console.log(response.data.ingridient);
      return setRecipe(response.data);
    });
  };
  useEffect(() => getOne(), []);
  return (
    <div>
      <h2>{recipe.recipeName}</h2>
      <p>{recipe.author}</p>
      <img src={recipe.recipeImgUrl} alt="" />
      <h3>Description</h3>
      <p>{recipe.description}</p>
      <h3>Preparation</h3>
      <p>{recipe.preparation}</p>
      <h3>Ingredients</h3>
      {/* {recipe.ingridient.map((item) => (
        <p>{item[0]}</p>
      ))} */}
    </div>
  );
};

export default Recipe;
