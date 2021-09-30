import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./Form.css";
import ReturnIcon from "../../shared-components/return-icon/ReturnIcon";

interface Fields {
  name: string;
  price: number;
}

function Form(): React.ReactElement {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<Fields>({
    name: "",
    price: 0,
  });

  useEffect(() => {
    handleFormValidation();
  }, [formFields, isValid]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    console.log("submitted: ", formFields);
    event.preventDefault();
  }

  function handleFormValidation(): void {
    formFields.price > 0 && Boolean(formFields.name)
      ? setIsValid(true)
      : setIsValid(false);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-field">
          Nome do Produto:
          <input
            className="form-field--input"
            name="name"
            type="text"
            value={formFields.name}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-field">
          Preço:
          <input
            className="form-field--input"
            name="price"
            type="number"
            value={formFields.price}
            onChange={handleInputChange}
          />
        </label>
        <input
          className="submit"
          disabled={!isValid}
          type="submit"
          value="Enviar"
        />
      </form>
      <ReturnIcon reference={"/"} />
    </div>
  );
}

export default Form;
