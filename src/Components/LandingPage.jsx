import React from "react";
import { Link } from "react-router-dom";
import HeroCard from "./HeroCard";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="heroDiv">
        <h1>Try & changeTest</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          dicta dolore doloremque quasi amet deserunt non illo fugiat impedit
          odio adipisci nam assumenda, enim molestiae vero rem reprehenderit,
          nihil et maxime, error obcaecati? Itaque commodi molestiae officiis
          quos quidem inventore, dolorum alias asperiores magnam? Dolore fugiat
          deserunt incidunt voluptas asperiores?
        </p>
        <Link to={"/allRecipes"}>Browse all recipes</Link>
      </div>
      <div className="heroLinks">
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
            link={"https://en.bc.fi/"}
            target={"_blank"}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
