import { fetchAllProducts, fetchProductById } from "./api";

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
