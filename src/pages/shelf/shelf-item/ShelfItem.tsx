import React from "react";
import "./ShelfItem.css";
import { Product } from "../../../shared-components/types";
import { useHistory } from "react-router-dom";

function ShelfItem(product: Product): React.ReactElement {
  const history = useHistory();

  const redirectToDetails = (productId: string) => {
    history.push(`/${productId}`);
  };

  return (
    <div
      className="shelf-item"
      data-testid="shelf-item"
      onClick={() => {
        redirectToDetails(product._id);
      }}
    >
      <div className="shelf-item--header">
        <div className="shelf-item--info">
          <h1>{product.name.toUpperCase()} </h1>
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
