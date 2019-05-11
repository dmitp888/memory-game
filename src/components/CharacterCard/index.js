import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={""} src={props.image} />
      </div>
    </div>
  );
}
export default CharacterCard;
