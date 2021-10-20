import React, { useContext, useEffect, useState } from "react";
import "./Shelf.css";
import ShelfItem from "./shelf-item/ShelfItem";
import { Icon, Product } from "../../shared-components/types";
import LoadingTag from "../../shared-components/loading-tag/LoadingTag";
import ActionIcon from "../../shared-components/action-icon/ActionIcon";
import { fetchAllProducts } from "../../api/api";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../App";

const Shelf: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { isLoggedIn } = useContext(AuthContext);
  const history = useHistory();

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
      {isLoggedIn && (
        <div className="create-icon">
          <ActionIcon
            onClick={() => {
              history.push("/new-product");
            }}
            type={Icon.Plus}
            alt="Ícone para adicionar um produto"
          />
        </div>
      )}
    </>
  );
};

export default Shelf;
