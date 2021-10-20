import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Details from "./Details";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { Product } from "../../shared-components/types";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "mock-id1",
  }),
}));

const mockResponse: Product = {
  _id: "mock-id1",
  name: "Mock Product 1",
  price: 100,
  imageUrl: "http://localhost:8080/image",
};

const server = setupServer(
  rest.get(
    "https://bah-zar-api.herokuapp.com/products/mock-id1",
    (req, res, ctx) => {
      return res(ctx.json(mockResponse));
    }
  )
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders snapshot while loading", () => {
  const { container } = render(<Details />);
  expect(container).toMatchSnapshot();
});

test("renders product", async () => {
  const { container } = render(<Details />);

  await waitFor(() => screen.getAllByRole("heading"));

  expect(container).toMatchSnapshot();
});
