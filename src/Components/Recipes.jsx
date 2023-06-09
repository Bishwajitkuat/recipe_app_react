import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import Swal from "sweetalert2";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getAll = () => {
    axios
      .get("http://localhost:3001/recipes")
      .then((response) => {
        setIsLoading(false);
        setRecipes(response.data);
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  useEffect(() => getAll(), []);

  return isLoading ? (
    <div className="loaderParent">
      <span className="loader"></span>
    </div>
  ) : (
    <div className="recipes">
      {recipes.map((item) => (
        <RecipeCard
          key={item.id}
          recipeFrom={item.recipeFrom}
          flagUrl={item.flagUrl}
          recipeImgUrl={item.image}
          recipeName={item.name}
          id={item.id}
          author={item.author}
        />
      ))}
    </div>
  );
};

export default Recipes;
