import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Axios from "axios";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const AddRecipe = () => {
  const [inputs, setInputs] = useState([""]);
  const [showIngredients, setShowIngredients] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [recipeInstructions, setRecipeInstructions] = useState("");
  const [recipeImageLink, setRecipeImageLink] = useState("");
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");
  const [ingredient6, setIngredient6] = useState("");
  const [ingredient7, setIngredient7] = useState("");
  const [ingredient8, setIngredient8] = useState("");
  const [ingredient9, setIngredient9] = useState("");
  const [ingredient10, setIngredient10] = useState("");
  const [ingredient11, setIngredient11] = useState("");
  const [ingredient12, setIngredient12] = useState("");
  const [ingredient13, setIngredient13] = useState("");
  const [ingredient14, setIngredient14] = useState("");
  const [ingredient15, setIngredient15] = useState("");
  const [ingredient16, setIngredient16] = useState("");
  const [ingredient17, setIngredient17] = useState("");
  const [ingredient18, setIngredient18] = useState("");
  const [ingredient19, setIngredient19] = useState("");
  const [ingredient20, setIngredient20] = useState("");

  const [ingredientAmount1, setIngredientAmount1] = useState("");
  const [ingredientAmount2, setIngredientAmount2] = useState("");
  const [ingredientAmount3, setIngredientAmount3] = useState("");
  const [ingredientAmount4, setIngredientAmount4] = useState("");
  const [ingredientAmount5, setIngredientAmount5] = useState("");
  const [ingredientAmount6, setIngredientAmount6] = useState("");
  const [ingredientAmount7, setIngredientAmount7] = useState("");
  const [ingredientAmount8, setIngredientAmount8] = useState("");
  const [ingredientAmount9, setIngredientAmount9] = useState("");
  const [ingredientAmount10, setIngredientAmount10] = useState("");
  const [ingredientAmount11, setIngredientAmount11] = useState("");
  const [ingredientAmount12, setIngredientAmount12] = useState("");
  const [ingredientAmount13, setIngredientAmount13] = useState("");
  const [ingredientAmount14, setIngredientAmount14] = useState("");
  const [ingredientAmount15, setIngredientAmount15] = useState("");
  const [ingredientAmount16, setIngredientAmount16] = useState("");
  const [ingredientAmount17, setIngredientAmount17] = useState("");
  const [ingredientAmount18, setIngredientAmount18] = useState("");
  const [ingredientAmount19, setIngredientAmount19] = useState("");
  const [ingredientAmount20, setIngredientAmount20] = useState("");

  const submitData = (data) => {
    axios
      .post("https://example.com/api", data)
      .then((response) => {
        console.log("Data submitted successfully!");
        console.log(response);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <div className="AddRecipe">
      <div className="container">
        <h1 className="content-header">Add A Recipe</h1>

        <FloatingLabel
          className="search-input-label recipe-inputs"
          label="Recipe Name"
        >
          <Form.Control
            className="search-input-form-control search-input"
            type="text"
            placeholder="Recipe Name"
            onChange={(e) => {
              setRecipeName(e.target.value);
            }}
          ></Form.Control>
        </FloatingLabel>

        <FloatingLabel
          className="search-input-label recipe-inputs"
          label="Image Link"
        >
          <Form.Control
            className="search-input-form-control search-input"
            type="text"
            placeholder="Image Link"
            onChange={(e) => {
              setRecipeImageLink(e.target.value);
            }}
          ></Form.Control>
        </FloatingLabel>

        <FloatingLabel
          className="search-input-label recipe-inputs"
          label="Recipe Instructions"
        >
          <Form.Control
            className="search-input-form-control search-input"
            as="textarea"
            placeholder="Recipe Instructions"
            style={{ height: "100px" }}
            onChange={(e) => {
              setRecipeInstructions(e.target.value);
            }}
          />
        </FloatingLabel>

        <button
          className="primary-btn show-ing-btn"
          onClick={() => {
            setShowIngredients(!showIngredients);
          }}
        >
          Add Ingredients
        </button>

        <br />

        <button
          className="primary-btn submit-btn"
          onClick={() => {
            setShowIngredients(!showIngredients);
          }}
        >
          Submit Recipe
        </button>

        {showIngredients && (
          <div>
            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount1(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient1(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount2(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient2(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount3(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient3(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount4(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient4(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount5(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient5(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount6(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient6(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount7(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient7(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount8(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient8(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount9(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient9(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount10(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient10(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount11(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient11(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount12(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient12(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount13(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient13(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount14(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient14(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount15(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient15(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount16(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient16(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount17(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient17(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount18(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient18(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount19(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient19(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>

            <div className="ingredient-containers">
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Amount"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Amount"
                  onChange={(e) => {
                    setIngredientAmount20(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel
                className="search-input-label recipe-inputs contained-recipe-inputs"
                label="Ingredient"
              >
                <Form.Control
                  className="search-input-form-control search-input  "
                  type="text"
                  placeholder="Ingredient"
                  onChange={(e) => {
                    setIngredient20(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default AddRecipe;
