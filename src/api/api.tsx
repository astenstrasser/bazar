const BASE_URL = "https://bah-zar-api.herokuapp.com";

export const fetchAllProducts = () => {
  return fetch(`${BASE_URL}/products`);
};

export const fetchProductById = (id: string) => {
  return fetch(`${BASE_URL}/products/${id}`);
};
