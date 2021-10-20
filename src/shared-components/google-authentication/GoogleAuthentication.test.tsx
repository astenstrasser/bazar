import { render } from "@testing-library/react";
import React from "react";
import GoogleAuthentication from "./GoogleAuthentication";
import { AuthContext } from "../../App";

function renderWithContext(authData: any) {
  return render(
    <AuthContext.Provider value={authData}>
      <GoogleAuthentication
        onLoginSuccess={(res) => {
          console.log();
        }}
        onLogoutSuccess={() => {
          console.log();
        }}
      />
    </AuthContext.Provider>
  );
}

test("renders snapshot when user is not logged in", () => {
  const { container, getByText } = renderWithContext({ isLoggedIn: false });
  expect(container).toMatchSnapshot();
  expect(getByText("Login")).toBeInTheDocument();
});

test("renders snapshot when user is logged in", () => {
  const { container, getByText } = renderWithContext({ isLoggedIn: true });
  expect(container).toMatchSnapshot();
  expect(getByText("Logout")).toBeInTheDocument();
});
