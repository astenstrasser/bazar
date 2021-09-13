import React from "react";
import "./Shelf.css";

const Shelf: React.FC = () => {
  return (
    <div className="shelf">
      <div className="shelf-item">
        <div className="shelf-item--header">
          <div className="shelf-item--info">
            <h1> {"Playstation 5".toUpperCase()} </h1>
            <p>com 2 controles</p>
          </div>
          <div className="shelf-item--price">R$ 3500</div>
        </div>
        <img
          className="shelf-item--picture"
          src="https://static.nagem.com.br/util/artefatos/produtos/m/n/1063391618262815/525031_1.jpg"
          alt="playstation5"
        />
      </div>
      <div className="shelf-item">
        <div className="shelf-item--header">
          <div className="shelf-item--info">
            <h1> {"Monitor".toUpperCase()} </h1>
            <p>36 polegadas</p>
          </div>
          <div className="shelf-item--price">R$ 1300</div>
        </div>
        <img
          className="shelf-item--picture"
          src="https://m.media-amazon.com/images/I/71m1pA4JteL._AC_SL1500_.jpg"
          alt="monitor dell"
        />
      </div>
      <div className="shelf-item">
        <div className="shelf-item--header">
          <div className="shelf-item--info">
            <h1> {"Câmera".toUpperCase()} </h1>
            <p>Nikon D5300</p>
          </div>
          <div className="shelf-item--price">R$ 2000</div>
        </div>
        <img
          className="shelf-item--picture"
          src="https://cdn.iset.io/assets/46483/produtos/564/5300d1.jpg"
          alt="imagem de camera fotográfica"
        />
      </div>
    </div>
  );
};

export default Shelf;
