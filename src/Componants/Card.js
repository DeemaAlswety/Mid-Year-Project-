import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const Card = () => {
  const location = useLocation();
  const { category, description, id, image, price, rating, title } =
    location.state;
  return (
    <Container>
      <Row>
        <Col md={2}>
          <div className="imgWrapper">
            <img src={image} />
          </div>
        </Col>
        <Col md={10}>
          <h4>{title}</h4>
          <p>
            <b>Category</b>: {category}
          </p>
          <p>
            <b>Description</b>: {description}
          </p>
          <p>
            <b>Price:</b> {price}
          </p>
          <p>
            <b>Rating:</b> {rating.rate}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Card;
