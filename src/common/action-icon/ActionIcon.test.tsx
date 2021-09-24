import { render } from "@testing-library/react";
import React from "react";
import ActionIcon, { Icon } from "./ActionIcon";

test("renders snapshot", () => {
  const { container } = render(
    <ActionIcon
      onClick={() => {
        console.log("test");
      }}
      alt={"alt"}
      type={Icon.LeftArrow}
    />
  );
  expect(container).toMatchSnapshot();
});
