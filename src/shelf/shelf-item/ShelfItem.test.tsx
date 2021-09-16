import React from "react";
import { render } from "@testing-library/react";
import ShelfItem from "./ShelfItem";

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
