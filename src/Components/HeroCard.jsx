import React from "react";
import { Link } from "react-router-dom";

const HeroCard = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <Link to={props.link} target={props.target}>
        {props.title}
      </Link>
    </div>
  );
};

export default HeroCard;
