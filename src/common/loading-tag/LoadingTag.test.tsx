import { render } from "@testing-library/react";
import React from "react";
import LoadingTag from "./LoadingTag";

test("renders snapshot", () => {
  const { container } = render(<LoadingTag isLoading={true} />);
  expect(container).toMatchSnapshot();
});

test("renders snapshot when is not loading", () => {
  const { container } = render(<LoadingTag isLoading={false} />);
  expect(container).toMatchSnapshot();
});
