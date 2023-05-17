import React, { useEffect, useState } from "react";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [countries, setCountries] = useState([]);
  const [recipeFrom, setRecipeFrom] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [flagUrl, setFlagUrl] = useState("");
  const [preparation, setPreparation] = useState("");
  const [ingredients, setIngredients] = useState([
    { ingredient: "", amount: "" },
    { ingredient: "", amount: "" },
  ]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleSelectChange = (e) => {
    setRecipeFrom(e.target.value);
    const selected = countries.filter(
      (item) => item.name.common === e.target.value
    );
    setFlagUrl(selected[0].flags.svg);

    // setFlagUrl().data[0].flags.svg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      name,
      author,
      recipeFrom,
      description,
      image,
      ingredients,
      preparation,
      flagUrl,
    };
    axios
      .post("http://localhost:3001/recipes", newPost)
      .then((response) => alert("The recipe added!"));
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
    <form className="createForm">
      <h2>Add new recipe</h2>
      <div className="inputDiv">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor="recipeFrom">Recipe From</label>
        <select onChange={(e) => handleSelectChange(e)}>
          {countries
            .map((item) => item.name.common)
            .sort()
            .map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>
      </div>
      <div className="inputDiv">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="inputDiv">
        <label htmlFor="preparation">Preparation</label>
        <textarea
          name="preparation"
          onChange={(e) => setPreparation(e.target.value)}
          value={preparation}
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="inputDiv">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </div>
      <label>Ingredients</label>
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
              <button onClick={(e) => handleRemoveIngre(e, index)}>🗑️</button>
            </div>
          </div>
        ))}
        <button className="newIngreBtn" onClick={(e) => handleAddIngre(e)}>
          New field
        </button>
      </div>
      <button className="addRecipeBtn" onClick={handleSubmit}>
        Add new recipe
      </button>
    </form>
  );
};

export default Create;
