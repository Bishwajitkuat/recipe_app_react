import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const getOne = () => {
    axios
      .get(`http://localhost:3001/recipes/${id}`)
      .then((response) => {
        setIsLoading(false);
        return setRecipe(response.data);
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
  useEffect(() => getOne(), []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/recipes/${id}`)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Your recipe has been deleted",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/allRecipes");
      })
      .catch((err) => {
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return isLoading ? (
    <div className="loaderParent">
      <span className="loader"></span>
    </div>
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
          <div className="btnDiv">
            <Link to={`/update/${recipe.id}`}>
              <button>Edit</button>
            </Link>
            <button className="delBtn" onClick={(e) => handleDelete(recipe.id)}>
              Delete
            </button>
          </div>
        </div>
        <img className="recipeBodyImg" src={recipe.image} alt="" />
      </div>
    </div>
  );
};

export default Recipe;
