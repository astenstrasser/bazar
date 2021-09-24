import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Shelf from "./Shelf";
import { rest } from "msw";

import { setupServer } from "msw/node";

import { Product } from "../common/types";
import { GApiProvider } from "react-gapi-auth2";

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
  const { container } = render(
    <GApiProvider clientConfig={{ client_id: "" }}>
      <Shelf />
    </GApiProvider>
  );
  expect(container).toMatchSnapshot();
});

test("renders data", async () => {
  const { container } = render(
    <GApiProvider clientConfig={{ client_id: "" }}>
      <Shelf />
    </GApiProvider>
  );

  await waitFor(() => screen.getAllByRole("heading"));

  expect(container).toMatchSnapshot();
});

test("should display loading tag while fetching data", async () => {
  server.use(
    rest.get("https://bah-zar-api.herokuapp.com/product", (req, res, ctx) => {
      setTimeout(() => {
        return res(ctx.json(mockResponse));
      }, 10);
    })
  );
  render(
    <GApiProvider clientConfig={{ client_id: "" }}>
      <Shelf />
    </GApiProvider>
  );

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
