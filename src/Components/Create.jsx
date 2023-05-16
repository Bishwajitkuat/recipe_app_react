import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [recipeFrom, setRecipeFrom] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([
    { ingredient: "", amount: "" },
    { ingredient: "", amount: "" },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      name,
      author,
      recipeFrom,
      description,
      image,
      ingredients,
    };
    console.log(newPost);
  };

  const handleIngredientChange = (e, i) => {
    const ingre = [...ingredients];
    ingre[i][e.target.name] = e.target.value;
    setIngredients(ingre);
  };
  const handleAddIngre = (e) => {
    e.preventDefault();
    const ingre = [...ingredients, { ingredient: "", amount: "" }];
    setIngredients(ingre);
  };
  const handleRemoveIngre = (e, index) => {
    e.preventDefault();
    if (ingredients.length > 1) {
      const ingre = [...ingredients];
      ingre.splice(index, 1);
      setIngredients(ingre);
    }
  };
  return (
    <form>
      <h2>Add new recipe</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
      </div>
      <div>
        <label htmlFor="recipeFrom">Recipe From</label>
        <input
          type="text"
          name="recipeFrom"
          onChange={(e) => setRecipeFrom(e.target.value)}
          value={recipeFrom}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </div>
      <h3>Ingridients</h3>
      <div className="ingredients">
        {ingredients.map((item, index) => (
          <div className="ingredient" key={index}>
            <div>
              <label htmlFor="ingredient">Ingredient</label>
              <input
                type="text"
                name="ingredient"
                onChange={(e) => handleIngredientChange(e, index)}
                value={item.ingredient}
              />
            </div>
            <div>
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                name="amount"
                onChange={(e) => handleIngredientChange(e, index)}
                value={item.amount}
              />
            </div>
            <div className="ingredientBtns">
              <button onClick={handleAddIngre}>+</button>
              <button onClick={(e) => handleRemoveIngre(e, index)}>-</button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Create;
