import { render } from "@testing-library/react";
import React from "react";
import GoogleAuthentication from "./GoogleAuthentication";
import { GApiProvider } from "react-gapi-auth2";

test("renders snapshot", () => {
  const { container } = render(
    <GApiProvider clientConfig={{ client_id: "" }}>
      <GoogleAuthentication />
    </GApiProvider>
  );
  expect(container).toMatchSnapshot();
});
