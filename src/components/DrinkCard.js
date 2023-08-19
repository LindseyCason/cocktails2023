import React from "react";
import "./MainMenu.css";

export const DrinkCard = (props) => {
  let url;
  let img;
  if (props.type === "1") {
    url = props.name;
  } else {
    url = props.id;
  }
  return (
    <a href={url} className="cardBox">
      <div id={props.id} raised="true">
        <img src={props.img} className="cardImage" wrapped ui={false} />
        <div className="cardContent">{props.name}</div>
      </div>
    </a>
  );
};
