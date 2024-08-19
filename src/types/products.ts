export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageBase64?: string;
}

export interface Products extends Array<Product> {}
export interface CreateProduct extends Omit<Product, "id"> {}
export interface UpdateProduct extends Omit<Product, "id" | "name" | "price" | "imageBase64"> {}
