import React, { useEffect, useState } from "react";
import { useGoogleAuth } from "react-gapi-auth2";
import "./Shelf.css";
import ShelfItem from "./shelf-item/ShelfItem";
import { Icon, Product } from "../../shared-components/types";
import LoadingTag from "../../shared-components/loading-tag/LoadingTag";
import ActionIcon from "../../shared-components/action-icon/ActionIcon";
import { fetchAllProducts } from "../../api/api";

const Shelf: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { googleAuth } = useGoogleAuth();

  useEffect(() => {
    isLoading &&
      fetchAllProducts()
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
