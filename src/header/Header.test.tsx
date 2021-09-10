import Header from "./Header";
import { getByAltText, render } from "@testing-library/react";

test("renders logo", () => {
  const { getByAltText } = render(<Header />);
  expect(getByAltText("Logo Bahzar")).toBeInTheDocument();
});
