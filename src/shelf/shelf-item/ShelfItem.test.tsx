import React from "react";
import { render, screen } from "@testing-library/react";
import ShelfItem from "./ShelfItem";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

test("renders snapshot", () => {
  const { container } = render(
    <ShelfItem
      _id="id"
      name="test"
      details="test"
      imageUrl="scr"
      price={1342.0}
      imageAltText="test"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("redirect on click", () => {
  const history = createMemoryHistory();
  const pushSpy = jest.spyOn(history, "push");

  render(
    <Router history={history}>
      <ShelfItem
        _id="product-id"
        name="my test item"
        details="test"
        imageUrl="scr"
        price={1342.0}
        imageAltText="test"
      />
    </Router>
  );

  userEvent.click(screen.getByTestId("shelf-item"));
  expect(pushSpy).toHaveBeenCalledWith("/product-id");
});
