import axios from "axios";

const BASE_URL =
  process.env.API_BASE_URL || "https://bah-zar-api.herokuapp.com";

export function fetchAllProducts(): Promise<Response> {
  return fetch(`${BASE_URL}/products`);
}

export function fetchProductById(id: string): Promise<Response> {
  return fetch(`${BASE_URL}/products/${id}`);
}

export async function createNewProduct(
  name: string,
  price: number,
  description: string,
  picture: string,
  pictureAltText: string
): Promise<Response> {
  return axios.post(`${BASE_URL}/products`, {
    name: name,
    price: price,
    details: description,
    imageUrl: picture,
    imageAltText: pictureAltText,
  });
}
