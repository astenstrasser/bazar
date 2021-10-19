import React from "react";
import Form, { FormFields } from "./Form";
import { fireEvent, render } from "@testing-library/react";
import { Container } from "react-dom";

test("renders snapshot", () => {
  const handleSubmitMock = jest.fn();

  const { container } = render(<Form handleSubmit={handleSubmitMock} />);
  expect(container).toMatchSnapshot();
});

test("should send all fields on submit", () => {
  const handleSubmitMock = jest.fn();

  const inputFields: FormFields = {
    name: "product name",
    price: 10,
    description: "product description",
    picture: "http://localhost:8080/picture",
    pictureAltText: "alt text",
  };

  const { getByText, container } = render(
    <Form handleSubmit={handleSubmitMock} />
  );

  fillFormWithFakeData(container, inputFields);

  fireEvent(
    getByText("Submit"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(handleSubmitMock).toBeCalledTimes(1);
  expect(handleSubmitMock.mock.calls[0]).toEqual([{ ...inputFields }]);
  expect(getByText("Submit")).not.toBeDisabled();
});

test("should disable button when fields are not filled", () => {
  const handleSubmitMock = jest.fn();

  const { getByText } = render(<Form handleSubmit={handleSubmitMock} />);

  fireEvent(
    getByText("Submit"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(getByText("Submit")).toBeDisabled();
});

function fillFormWithFakeData(container: Container, formFields: FormFields) {
  const nameField = container.querySelector("#name");
  nameField &&
    fireEvent.input(nameField, { target: { value: formFields.name } });

  const priceField = container.querySelector("#price");
  priceField &&
    fireEvent.input(priceField, { target: { value: formFields.price } });

  const descriptionField = container.querySelector("#description");
  descriptionField &&
    fireEvent.input(descriptionField, {
      target: { value: formFields.description },
    });

  const pictureField = container.querySelector("#picture");
  pictureField &&
    fireEvent.input(pictureField, { target: { value: formFields.picture } });

  const pictureAltText = container.querySelector("#altText");
  pictureAltText &&
    fireEvent.input(pictureAltText, {
      target: { value: formFields.pictureAltText },
    });
}
