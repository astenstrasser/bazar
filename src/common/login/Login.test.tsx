import { render } from "@testing-library/react";
import React from "react";
import Login from "./Login";

test("renders snapshot", () => {
  const { container } = render(<Login />);
  expect(container).toMatchSnapshot();
});
