import React, { useEffect, useState } from "react";
import { useGoogleAuth } from "react-gapi-auth2";
import "./Shelf.css";
import ShelfItem from "./shelf-item/ShelfItem";
import { Product } from "../common/types";
import LoadingTag from "../common/loading-tag/LoadingTag";
import ActionIcon, { Icon } from "../common/action-icon/ActionIcon";

const Shelf: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { googleAuth } = useGoogleAuth();

  useEffect(() => {
    const url = "https://bah-zar-api.herokuapp.com/products";
    isLoading &&
      fetch(url)
        .then((res) => res.json())
        .then((products) => {
          setProducts(products);
          setIsLoading(false);
        });
    return () => setIsLoading(false);
  }, []);

  return (
    <>
      <div className="shelf">
        <LoadingTag isLoading={isLoading} />
        {products &&
          products.map((product: Product) => (
            <ShelfItem key={product._id} {...product} />
          ))}
      </div>
      {googleAuth?.isSignedIn.get() && (
        <ActionIcon
          onClick={() => {
            console.log("clicou");
          }}
          type={Icon.Plus}
          alt="Ícone para adicionar um produto"
        />
      )}
    </>
  );
};

export default Shelf;
