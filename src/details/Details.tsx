import React, { useEffect, useState } from "react";
import "./Details.css";
import { BrowserRouter, Link, useParams } from "react-router-dom";
import { Product } from "../common/types";

function Details(): React.ReactElement {
  const { id }: { id: string } = useParams();

  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://bah-zar-api.herokuapp.com/product/${id}`;
    isLoading &&
      fetch(url)
        .then((res) => res.json())
        .then((product: Product) => {
          setProduct(product);
          setIsLoading(false);
        });
    return () => setIsLoading(false);
  }, []);

  return (
    <>
      <div>{isLoading && <span>Loading...</span>}</div>
      {product && (
        <div className="details">
          <h1>{product.name}</h1>
          <img src={product?.imageUrl} alt={product?.imageAltText} />
          <span> {product.details}</span>
          <span> {product.price}</span>
        </div>
      )}

      <BrowserRouter>
        <Link to="/">Voltar</Link>
      </BrowserRouter>
    </>
  );
}

export default Details;
