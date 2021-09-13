import React from "react";
import { render } from "@testing-library/react";
import Shelf from "./Shelf";

test("renders snapshot", () => {
  const { container } = render(<Shelf />);
  expect(container.firstChild).toMatchSnapshot();
});
