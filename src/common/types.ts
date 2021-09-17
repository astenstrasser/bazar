export interface Product {
  _id: string;
  name: string;
  price: number;
  details?: string;
  imageUrl?: string;
  imageAltText?: string;
}
