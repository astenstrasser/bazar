import React, { useEffect, useState } from "react";
import "./Form.css";
import ReturnIcon from "../../shared-components/return-icon/ReturnIcon";

interface FormProps {
  handleSubmit: (name: string, price: number) => void;
}

function Form({ handleSubmit }: FormProps): React.ReactElement {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    price > 0 && !!name ? setIsValid(true) : setIsValid(false);
  }, [price, name]);

  return (
    <>
      <div className="form-container">
        <div className="form">
          <div className="form-field">
            <label htmlFor="name">Nome do Produto:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="price">Preço:</label>
            <input
              id="price"
              value={price}
              type="number"
              onChange={(event) => setPrice(Number(event.target.value))}
            />
          </div>

          <button
            className="submit"
            onClick={() => handleSubmit(name, price)}
            disabled={!isValid}
          >
            Submit
          </button>
        </div>
      </div>
      <ReturnIcon reference={"/"} />
    </>
  );
}

export default Form;
