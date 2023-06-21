import React from "react";
import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ monster }) => (
  <div className="card-list">
    {monster.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
