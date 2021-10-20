import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Shelf from "./Shelf";
import { rest } from "msw";

import { setupServer } from "msw/node";

import { Product } from "../../shared-components/types";
import GoogleAuthentication from "../../shared-components/google-authentication/GoogleAuthentication";
import { AuthContext } from "../../App";

const mockResponse: Product[] = [
  {
    _id: "id1",
    name: "Mock Product 1",
    price: 100,
    imageUrl: "http://localhost:8080/image",
  },
  {
    _id: "id2",
    name: "Mock Product 2",
    price: 123,
    imageUrl: "http://localhost:8080/image2",
  },
];

const server = setupServer(
  rest.get("https://bah-zar-api.herokuapp.com/products", (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders snapshot", () => {
  const { container } = render(<Shelf />);
  expect(container).toMatchSnapshot();
});

test("renders data", async () => {
  const { container } = render(<Shelf />);

  await waitFor(() => screen.getAllByRole("heading"));

  expect(container).toMatchSnapshot();
});

test("should display loading tag while fetching data", async () => {
  server.use(
    rest.get("https://bah-zar-api.herokuapp.com/products", (req, res, ctx) => {
      setTimeout(() => {
        return res(ctx.json(mockResponse));
      }, 10);
    })
  );
  render(<Shelf />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("should render Add icon when user is logged in", () => {
  const { getByAltText } = render(
    <AuthContext.Provider value={{ isLoggedIn: true }}>
      <Shelf />
    </AuthContext.Provider>
  );
  expect(getByAltText("Ícone para adicionar um produto")).toBeInTheDocument();
});
