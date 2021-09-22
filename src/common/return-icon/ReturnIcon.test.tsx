import React from "react";
import { render } from "@testing-library/react";
import ReturnIcon from "./ReturnIcon";

test("renders snapshot", () => {
  const { container } = render(<ReturnIcon reference={"/"} />);
  expect(container).toMatchSnapshot();
});
