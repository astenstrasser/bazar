import React from "react";
import "./Shelf.css";
import ShelfItem from "../shelf-item/ShelfItem";

const Shelf: React.FC = () => {
  return (
    <div className="shelf">
      <ShelfItem
        name="Playstation 5"
        price={3500}
        description="com 2 controles"
        image="https://static.nagem.com.br/util/artefatos/produtos/m/n/1063391618262815/525031_1.jpg"
        image_alt="playstation5"
      />
      <ShelfItem
        name="Monitor"
        price={1300}
        description="36 polegadas"
        image="https://m.media-amazon.com/images/I/71m1pA4JteL._AC_SL1500_.jpg"
        image_alt="monitor dell"
      />

      <ShelfItem
        name="Câmera"
        price={2000}
        description="Nikon D5300"
        image="https://cdn.iset.io/assets/46483/produtos/564/5300d1.jpg"
        image_alt="imagem de camera fotográfica"
      />
    </div>
  );
};

export default Shelf;
