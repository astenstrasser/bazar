import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";

test("renders snapshot", () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
