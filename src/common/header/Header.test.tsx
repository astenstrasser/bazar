import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";

test("renders logo", () => {
  const { getByRole, getByAltText } = render(<Header />);
  expect(getByRole("img")).toBeInTheDocument();
  expect(getByAltText("logo bazar")).toBeInTheDocument();
});
