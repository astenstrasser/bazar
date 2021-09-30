import { render } from "@testing-library/react";
import React from "react";
import ActionIcon from "./ActionIcon";
import { Icon } from "../types";

test("renders snapshot", () => {
  const { container } = render(
    <ActionIcon onClick={() => {}} alt={"alt"} type={Icon.LeftArrow} />
  );
  expect(container).toMatchSnapshot();
});
