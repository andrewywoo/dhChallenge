import React from "react";
import Card from "./Card/Card";
import "./CardList.css";

const cardList = props => {
  return (
    <div className="card-list">
      {props.products.map(p => (
        <Card key={p.id} name={p.name} type={p.collection} />
      ))}
    </div>
  );
};

export default cardList;
