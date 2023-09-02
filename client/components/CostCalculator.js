import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Form } from "react-bootstrap";

const CostCalculator = () => {
  const [cost, setCost] = useState("");
  const [pkgOz, setPkgOz] = useState("");
  const [grUsed, setGrUsed] = useState("");
  const [total, setTotal] = useState("");

  const calculateCost = () => {
    let costPerOz = cost / pkgOz;

    let costPerGram = costPerOz / 28.34;

    let totalCostPerGrams = grUsed * costPerGram;
    let totalCost = totalCostPerGrams.toFixed(2);
    // alert(
    //   `Cost per OZ: ${costPerOz} | Cost per Gram: ${costPerGram} | TotalCost ${totalCostPerGrams}`
    // );
    setTotal(totalCost);
  };

  return (
    <div className="CostCalculator">
      <div className="container">
        <h1 className="content-header">Cost Calculator</h1>
        <Container fluid="md" className="ingredient-container">
          <Row>
            <Col>
              <FloatingLabel className="search-input-label" label="Cost USD$">
                <Form.Control
                  className="search-input-form-control search-input"
                  type="text"
                  placeholder="Cost USD$"
                  onChange={(e) => {
                    setCost(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel className="search-input-label" label="Pkg Oz">
                <Form.Control
                  className="search-input-form-control search-input"
                  type="text"
                  placeholder="Pkg Oz"
                  onChange={(e) => {
                    setPkgOz(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel className="search-input-label" label="Gr Used">
                <Form.Control
                  className="search-input-form-control search-input"
                  type="text"
                  placeholder="Gr Used"
                  onChange={(e) => {
                    setGrUsed(e.target.value);
                  }}
                ></Form.Control>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel className="search-input-label" label="Total">
                <Form.Control
                  className="search-input-form-control search-input"
                  type="text"
                  placeholder="Total"
                  value={total}
                ></Form.Control>
              </FloatingLabel>
            </Col>
            <Col>
              <button
                onClick={() => {
                  calculateCost();
                }}
                className="primary-btn"
              >
                Calculate
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default CostCalculator;
