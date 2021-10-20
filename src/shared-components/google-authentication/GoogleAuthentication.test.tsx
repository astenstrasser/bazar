import { render } from "@testing-library/react";
import React from "react";
import GoogleAuthentication from "./GoogleAuthentication";

test("renders snapshot", () => {
  const { container } = render(
    <GoogleAuthentication
      onLoginSuccess={(res) => {
        console.log();
      }}
      onLogoutSuccess={() => {
        console.log();
      }}
    />
  );
  expect(container).toMatchSnapshot();
});
