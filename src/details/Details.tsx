import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
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
    <div className="details-page">
      <div className="loading">{isLoading && <span>Loading...</span>}</div>
      {product && (
        <div className="item">
          <h1 className="item--title">{product.name.toUpperCase()}</h1>
          <div className="item--body">
            <img
              className="item--picture"
              src={product?.imageUrl}
              alt={product?.imageAltText}
            />
            <div className="item--information">
              <span> R$ {product.price}</span>
              <p>
                <strong>Descrição:</strong>
                <br />
                {product.details}
              </p>
            </div>
          </div>
        </div>
      )}

      <a href={"/"} className="return--button">
        Voltar
      </a>
    </div>
  );
}

export default Details;
