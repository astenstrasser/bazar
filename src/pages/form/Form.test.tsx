import React from "react";
import Form from "./Form";
import { render } from "@testing-library/react";

test("renders snapshot", () => {
  const { container } = render(<Form />);
  expect(container).toMatchSnapshot();
});
