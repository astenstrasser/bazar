import React, { ChangeEvent, FormEvent, useState } from "react";

function Form(): React.ReactElement {
  const [formFields, setFormFields] = useState({ name: "", price: 0 });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    console.log("submitted: ", formFields.price, formFields.name);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome do Produto:
        <input
          name="name"
          type="text"
          value={formFields.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Preço:
        <input
          name="price"
          type="number"
          value={formFields.price}
          onChange={handleInputChange}
        />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Form;
