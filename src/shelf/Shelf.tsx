import React, { useEffect, useState } from "react";
import "./Shelf.css";
import ShelfItem from "./shelf-item/ShelfItem";
import { Product } from "../common/types";

const Shelf: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "http://bah-zar-api.herokuapp.com/product";
    fetch(url)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return (
    <div className="shelf">
      {products &&
        products.map((product: Product) => (
          <ShelfItem key={product._id} {...product} />
        ))}
    </div>
  );
};

export default Shelf;
