import React from "react";
import "./ShelfItem.css";

interface Item {
  name: string;
  price: number;
  description: string;
  image: string;
  image_alt: string;
}

function ShelfItem(props: Item): React.ReactElement {
  return (
    <div className="shelf-item">
      <div className="shelf-item--header">
        <div className="shelf-item--info">
          <h1> {props.name.toUpperCase()} </h1>
          <p>{props.description}</p>
        </div>
        <div className="shelf-item--price">R$ {props.price}</div>
      </div>
      <img
        className="shelf-item--picture"
        src={props.image}
        alt={props.image_alt}
      />
    </div>
  );
}

export default ShelfItem;
