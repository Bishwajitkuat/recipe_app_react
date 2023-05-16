import React from "react";
import { Link } from "react-router-dom";
import HeroCard from "./HeroCard";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="heroDiv">
        <h1>Recipe</h1>
        <p>Some text</p>
        <Link to={"/allRecipes"}>
          <button>Browse recipes</button>
        </Link>
      </div>
      <div className="heroLinks">
        <h2>Looking for the recipes?</h2>
        <div className="heroLinkCards">
          <HeroCard
            title={"Browse recipes"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni e, laborum ducimus consequuntur pariatur beatae quam suscipit"
            }
            link={"/allRecipes"}
          />
          <HeroCard
            title={"Add recipes"}
            text={
              "Lorem ipsum dolor sit amet uri sit tempore quo voluptas eaque, laborum ducimus consequuntur pariatur beatae quam suscipit"
            }
            link={"/create"}
          />
          <HeroCard
            title={"Learn more about us"}
            text={"Lorem ipsum dolor sit amet ur pariatur beatae quam suscipit"}
            link={"/allRecipes"}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
