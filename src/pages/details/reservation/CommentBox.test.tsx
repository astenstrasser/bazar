import { render } from "@testing-library/react";
import ShelfItem from "../../shelf/shelf-item/ShelfItem";
import React from "react";
import CommentBox from "./CommentBox";
import { AuthContext } from "../../../App";
import GoogleAuthentication from "../../../shared-components/google-authentication/GoogleAuthentication";

function renderWithContext(authData: any) {
  return render(
    <AuthContext.Provider value={authData}>
      <CommentBox />
    </AuthContext.Provider>
  );
}

test("renders snapshot", () => {
  const { container } = renderWithContext({
    isSignedIn: true,
    user: { getName: () => "Full Name", getEmail: () => "email@example.com" },
  });
  expect(container).toMatchSnapshot();
});

test("should fill name and email with logged user information", () => {
  const { container } = renderWithContext({
    isSignedIn: true,
    user: { getName: () => "Full Name", getEmail: () => "email@example.com" },
  });

  expect(container.querySelector("#name")).toHaveValue("Full Name");
  expect(container.querySelector("#email")).toHaveValue("email@example.com");
});
