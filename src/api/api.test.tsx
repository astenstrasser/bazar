import { createNewProduct, fetchAllProducts, fetchProductById } from "./api";
import axios from "axios";

jest.mock("axios");

test("should fetch all products", () => {
  const fetchMock = jest.spyOn(global, "fetch");
  fetchAllProducts();
  expect(fetchMock).toHaveBeenCalledWith(
    "https://bah-zar-api.herokuapp.com/products"
  );
});

test("should fetch by id", () => {
  const fetchMock = jest.spyOn(global, "fetch");
  fetchProductById("mockId");
  expect(fetchMock).toHaveBeenCalledWith(
    "https://bah-zar-api.herokuapp.com/products/mockId"
  );
});

test("should create new product", () => {
  const postMock = jest.spyOn(axios, "post");
  createNewProduct(
    "New product",
    10,
    "description",
    "http://localhost:8080/pic-id"
  );
  expect(postMock).toHaveBeenCalledWith(
    "https://bah-zar-api.herokuapp.com/products",
    {
      name: "New product",
      price: 10,
      details: "description",
      imageUrl: "http://localhost:8080/pic-id",
    }
  );
});
