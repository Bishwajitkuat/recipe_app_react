import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <div className="recipeCard">
      <img className="flag" src={props.flagUrl} alt="" />
      <img className="recipeImg" src={props.recipeImgUrl} alt="" />
      <h3>{props.recipeName}</h3>
      <p>{props.recipeDescription}</p>
      <Link to={`/recipe/${props.id}`}>
        <button>See more</button>
      </Link>
    </div>
  );
};

export default RecipeCard;
