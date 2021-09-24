import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";
import { GApiProvider } from "react-gapi-auth2";

test("renders snapshot", () => {
  const { container } = render(
    <GApiProvider clientConfig={{ client_id: "" }}>
      <Header />
    </GApiProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
