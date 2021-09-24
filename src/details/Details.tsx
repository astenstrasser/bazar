import React, { useEffect, useState } from "react";
import { useGoogleAuth } from "react-gapi-auth2";
import { useHistory, useParams } from "react-router-dom";
import "./Details.css";
import { Product } from "../common/types";
import LoadingTag from "../common/loading-tag/LoadingTag";
import ActionIcon, { Icon } from "../common/action-icon/ActionIcon";

function Details(): React.ReactElement {
  const { id }: { id: string } = useParams();

  const { googleAuth } = useGoogleAuth();
  console.log("user logado", googleAuth?.isSignedIn.get());

  const history = useHistory();
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
  }, [LoadingTag]);

  return (
    <div className="details-page">
      <LoadingTag isLoading={isLoading} />
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
      <ActionIcon
        onClick={() => {
          history.push("/");
        }}
        alt="Seta para retornar à página anterior"
        type={Icon.LeftArrow}
      />
    </div>
  );
}

export default Details;
