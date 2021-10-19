import React, { useEffect, useState } from "react";
import "./Form.css";
import ReturnIcon from "../../shared-components/return-icon/ReturnIcon";

interface FormProps {
  handleSubmit: (fields: FormFields) => void;
}

export interface FormFields {
  name: string;
  price: number;
  description: string;
  picture: string;
}

function Form({ handleSubmit }: FormProps): React.ReactElement {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [picture, setPicture] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    !!price && price > 0 && !!name ? setIsValid(true) : setIsValid(false);
  }, [price, name]);

  return (
    <>
      <div className="form-container">
        <div className="form">
          <div className="form-field">
            <label htmlFor="name">Nome do Produto *</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="price">Preço *</label>
            <input
              id="price"
              value={price ? price : ""}
              type="number"
              onChange={(event) => setPrice(Number(event.target.value))}
            />
          </div>

          <div className="form-field">
            <label htmlFor="description">Descrição</label>
            <input
              id="description"
              value={description}
              type="text"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="picture">Foto (url)</label>
            <input
              id="picture"
              value={picture}
              type="text"
              onChange={(event) => setPicture(event.target.value)}
            />
          </div>

          <button
            className="submit--button"
            title="Submit form"
            onClick={() => handleSubmit({ name, price, description, picture })}
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
