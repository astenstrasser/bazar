import React from "react";
import "./ShelfItem.css";
import { Product } from "../../common/types";

function ShelfItem(product: Product): React.ReactElement {
  return (
    <div className="shelf-item">
      <div className="shelf-item--header">
        <div className="shelf-item--info">
          <h1> {product.name.toUpperCase()} </h1>
          <p>{product.details}</p>
        </div>
        <div className="shelf-item--price">R$ {product.price}</div>
      </div>
      <img
        className="shelf-item--picture"
        src={product.imageUrl}
        alt={product.imageAltText}
      />
    </div>
  );
}

export default ShelfItem;
