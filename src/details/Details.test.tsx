import React from "react";
import { render } from "@testing-library/react";
import Details from "./Details";

test("renders snapshot", () => {
  const { container } = render(<Details />);
  expect(container.firstChild).toMatchSnapshot();
});
