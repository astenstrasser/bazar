const BASE_URL = "https://bah-zar-api.herokuapp.com";

export function fetchAllProducts(): Promise<Response> {
  return fetch(`${BASE_URL}/products`);
}

export function fetchProductById(id: string): Promise<Response> {
  return fetch(`${BASE_URL}/products/${id}`);
}
