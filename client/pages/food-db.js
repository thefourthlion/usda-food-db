import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const food = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [foodName, setFoodName] = useState("");
  const [foodNutrients, setFoodNutrients] = useState([]);

  const getSearchResults = () => {
    Axios.get(
      `http://localhost:3002/api/foundationalFood1/name/${searchTerm}`
    ).then((res) => {
      const data = res.data;

      console.log(data[0].description);

      const nutrition = data[0].foodNutrients;

      const water = nutrition.filter((item) => item.nutrient.name == "Water");

      if (water.length > 0) {
        // nutrition name
        console.log(water[0].nutrient.name);
        // nutrition amount
        console.log(water[0].amount);

        console.log("");
      }

      const protein = nutrition.filter(
        (item) => item.nutrient.name == "Protein"
      );

      if (protein.length > 0) {
        // nutrition name
        console.log(protein[0].nutrient.name);
        // nutrition amount
        console.log(protein[0].amount);

        console.log("");
      }

      const carbs = nutrition.filter(
        (item) => item.nutrient.name == "Carbohydrate, by difference"
      );

      if (carbs.length > 0) {
        // nutrition name
        console.log(carbs[0].nutrient.name);
        // nutrition amount
        console.log(carbs[0].amount);

        console.log("");
      }

      const saturatedFat = nutrition.filter(
        (item) => item.nutrient.name == "Fatty acids, total saturated"
      );

      if (saturatedFat.length > 0) {
        // nutrition name
        console.log(saturatedFat[0].nutrient.name);
        // nutrition amount
        console.log(saturatedFat[0].amount);

        console.log("");
      }

      const monounsaturatedFat = nutrition.filter(
        (item) => item.nutrient.name == "Fatty acids, total monounsaturated"
      );

      if (monounsaturatedFat.length > 0) {
        // nutrition name
        console.log(monounsaturatedFat[0].nutrient.name);
        // nutrition amount
        console.log(monounsaturatedFat[0].amount);

        console.log("");
      }

      const polyunsaturatedFat = nutrition.filter(
        (item) => item.nutrient.name == "Fatty acids, total polyunsaturated"
      );

      if (polyunsaturatedFat.length > 0) {
        // nutrition name
        console.log(polyunsaturatedFat[0].nutrient.name);
        // nutrition amount
        console.log(polyunsaturatedFat[0].amount);
      }
    });
  };

  const getFoodInfo = () => {
    alert(foodName);
    console.log(foodNutrients);
  };

  return (
    <div className="Food">
      <h1>Hello world</h1>
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
    </div>
  );
};

export default food;
