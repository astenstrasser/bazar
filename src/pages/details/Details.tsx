import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import { Product } from "../../shared-components/types";
import LoadingTag from "../../shared-components/loading-tag/LoadingTag";
import ReturnIcon from "../../shared-components/return-icon/ReturnIcon";
import { fetchProductById } from "../../api/api";
import { AuthContext } from "../../App";
import CommentBox from "./reservation/CommentBox";

function Details(): React.ReactElement {
  const { id }: { id: string } = useParams();
  const { user } = useContext(AuthContext);

  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    isLoading &&
      fetchProductById(id)
        .then((res) => res.json())
        .then((product: Product) => {
          setProduct(product);
          setIsLoading(false);
        });
    return () => setIsLoading(false);
  }, [LoadingTag]);

  return (
    <>
      <div className="details-page">
        <LoadingTag isLoading={isLoading} />
        {product && (
          <>
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
            <CommentBox />
          </>
        )}
      </div>
      <ReturnIcon reference={"/"} />
    </>
  );
}

export default Details;
