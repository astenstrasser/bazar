import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Shelf from "./Shelf";
import { rest } from "msw";

import { setupServer } from "msw/node";

import { Product } from "../common/types";

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
  rest.get("https://bah-zar-api.herokuapp.com/product", (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders snapshot", () => {
  const { container } = render(<Shelf />);
  expect(container.firstChild).toMatchSnapshot();
});

test("renders data", async () => {
  render(<Shelf />);

  await waitFor(() => screen.getAllByRole("heading"));

  expect(screen.getAllByRole("heading")[0]).toHaveTextContent("MOCK PRODUCT 1");
  expect(screen.getAllByRole("heading")[1]).toHaveTextContent("MOCK PRODUCT 2");
  expect(screen.queryByText("Loading...")).toBeNull();
});

test("should display loading tag while fetching data", async () => {
  server.use(
    rest.get("https://bah-zar-api.herokuapp.com/product", (req, res, ctx) => {
      setTimeout(() => {
        return res(ctx.json(mockResponse));
      }, 10);
    })
  );
  render(<Shelf />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
