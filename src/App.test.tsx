import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders snapshot", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
