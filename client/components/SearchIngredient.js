import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Ingredients from "./Ingredients";
import CostCalculator from "./costCalculator";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const SearchIngredient = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchId, setSearchId] = useState("");
  const [pageSize, setPageSize] = useState(12);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [pageNumber, setPageNumber] = useState("");
  const [servings, setServings] = useState("");
  const foodUrl = `https://api.nal.usda.gov/fdc/v1/food/`;

  const refreshPage = () => {
    window.location.reload(false);
  };
  // ---------------- ingredients from search
  const Ingredients = ({ name, brandName, id, additionalDescriptions }) => {
    return (
      <div className="Ingredients">
        <div className="container">
          <h4 className="content-header">
            {brandName} {brandName != undefined && "-"} {name}
            {console.log(brandName)}
            <span
              className="add-btn"
              onClick={() => {
                setSearchId(id);
                searchFoodItem(id);

                setSearchResults([]);
              }}
            >
              +
            </span>
          </h4>
        </div>
      </div>
    );
  };

  const getSearchResults = () => {
    Axios.get(
      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchTerm}&pageSize=${pageSize}&api_key=DeTxJsnc4eKROkj7RcYJ1eJVJ2aBXi4XX8W3hwAl`
    ).then((res) => {
      const data = res.data;
      let foods = data.foods;
      let foodNames = foods.forEach((element) =>
        console.log(element.description)
      );
      // let nutrients = foods[0].foodNutrients;
      // console.log(data);
      // console.log(foods[0].fdcId);
      // console.log(foodNames);
      // console.log(nutrients);
      setSearchResults(data.foods);
    });
  };

  const searchFoodItem = (id) => {
    Axios.get(
      `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=DeTxJsnc4eKROkj7RcYJ1eJVJ2aBXi4XX8W3hwAl`
    ).then((res) => {
      const data = res.data;
      console.log(data);
      let name = `${data.description}`;
      recipeIngredients.push(name);
      // refreshPage();
      alert(`${recipeIngredients.length} - ${recipeIngredients}`);
      console.log({ "recipe ingredients": recipeIngredients });
    });
  };

  // ---------------- ingredients from addition
  const RecipeIngredient = ({ recipeIngredientName }) => {
    return (
      <div className="recipeIngredient">
        <Container className="containers">
          <FloatingLabel
            className="search-bar search-input-label"
            label="How Much (grams)"
          >
            <Form.Control
              className="search-input-form-control search-input"
              type="text"
              placeholder="How Much (grams)"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></Form.Control>
          </FloatingLabel>
          <FloatingLabel className="search-bar search-input-label" label="Cost">
            <Form.Control
              className="search-input-form-control search-input"
              type="text"
              placeholder="Cost"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></Form.Control>
          </FloatingLabel>
        </Container>
        <h4>{recipeIngredientName}</h4>
      </div>
    );
  };

  return (
    <div className="SearchIngredient">
      <div className="container">
        <Container>
          <h1 className="content-header">Search Ingredient</h1>
          <FloatingLabel
            className="search-bar search-input-label"
            label="Search Books"
          >
            <Form.Control
              className="search-input-form-control search-input"
              type="text"
              placeholder="Search Books"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></Form.Control>
          </FloatingLabel>
          <button
            onClick={() => {
              getSearchResults();
            }}
            className="search-btn primary-btn"
          >
            Search
          </button>
        </Container>
        <Container fluid="md" className="ingredient-container">
          <Row>
            {searchResults.map((val) => {
              return (
                <Col>
                  <Ingredients
                    name={val.description}
                    brandName={val.brandName}
                    id={val.fdcId}
                    additionalDescriptions={val.additionalDescriptions}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>

        {searchResults.length > 1 && (
          <button
            onClick={() => {
              setPageSize(pageSize + 12);
              getSearchResults();
            }}
            className="view-more primary-btn"
          >
            View More
          </button>
        )}

        <CostCalculator />

        {recipeIngredients.length > 1 && (
          <h1 className="recipe-ingredients-header">Recipe Ingredients</h1>
        )}
        {recipeIngredients.map((val) => {
          return (
            <div>
              <RecipeIngredient recipeIngredientName={recipeIngredients} />
            </div>
          );
        })}

        <h1 className="servings-header">Servings</h1>

        <Container className="containers">
          {/* // --------------------- servings -------------------- */}
          <FloatingLabel className="search-input-label" label="Servings">
            <Form.Control
              className="search-input-form-control search-input"
              type="text"
              placeholder="Servings"
              onChange={(e) => {
                setServings(e.target.value);
              }}
            ></Form.Control>
          </FloatingLabel>
          <FloatingLabel className="search-input-label" label="Amount">
            <Form.Control
              className="search-input-form-control search-input"
              type="text"
              placeholder="Amount"
              onChange={(e) => {
                setServings(e.target.value);
              }}
            ></Form.Control>
          </FloatingLabel>
        </Container>

        <Container>
          <h1 className="instructions">Recipe Name</h1>
          <FloatingLabel className="search-input-label" label="Recipe Name">
            <Form.Control
              className="search-input-form-control search-input"
              type="text"
              placeholder="Recipe Name"
              onChange={(e) => {
                setServings(e.target.value);
              }}
            ></Form.Control>
          </FloatingLabel>

          <h1 className="instructions">Instructions</h1>
          <FloatingLabel className="search-input-label" label="Instructions">
            <Form.Control
              className="search-input-form-control search-input"
              as="textarea"
              placeholder="Instructions"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Container>
      </div>
    </div>
  );
};
export default SearchIngredient;
