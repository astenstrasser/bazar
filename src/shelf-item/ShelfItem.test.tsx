import React from "react";
import { render } from "@testing-library/react";
import ShelfItem from "./ShelfItem";

test("renders snapshot", () => {
  const { container } = render(
    <ShelfItem
      name="test"
      description="test"
      image="scr"
      price={1342.0}
      image_alt="test"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
