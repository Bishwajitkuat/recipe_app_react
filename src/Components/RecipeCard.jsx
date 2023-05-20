import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <div className="recipeCard">
      <img className="recipeImg" src={props.recipeImgUrl} alt="" />
      <div>
        <h3>{props.recipeName}</h3>
        <p>{props.author}</p>
        <img className="flagImg" src={props.flagUrl} alt="flag" />
        <Link to={`/recipe/${props.id}`}>Learn more</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
