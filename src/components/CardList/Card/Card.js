import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="card">
      <div className="container">
        <strong>Product Name</strong>
        <div>{props.name}</div>
        <div className="card_type">Type: {props.type}</div>
      </div>
    </div>
  );
};

export default Card;
