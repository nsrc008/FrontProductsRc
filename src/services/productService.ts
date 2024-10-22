import apiClient from "../api/axiosConfig";
import { Product } from "../models/Product";

const productService = {
  async fetchAll(): Promise<Product[]> {
    const response = await apiClient.get<Product[]>("products/");
    return response.data.map(
      (productData: Product) =>
        new Product(productData.name, productData.isActive, productData.id)
    );
  },

  async create(product: Product): Promise<Product> {
    const response = await apiClient.post<Product>("products/", product);
    const productData = response.data;
    return new Product(productData.name, productData.isActive, productData.id);
  },

  async update(id: number, product: Product): Promise<void> {
    await apiClient.put<Product>(`products/${id}/`, product);
  },

  async delete(id: number): Promise<void> {
    await apiClient.delete(`products/${id}/`);
  },

  async search(term: string): Promise<Product[]> {
    const isIdSearch = !isNaN(Number(term));
    const url = isIdSearch ? `products/${term}/` : `products/?search=${term}`;
    const response = await apiClient.get<Product | Product[]>(url);

    if (isIdSearch && !Array.isArray(response.data)) {
      const productData = response.data as Product;
      return [
        new Product(productData.name, productData.isActive, productData.id),
      ];
    }

    return (response.data as Product[]).map(
      (productData: Product) =>
        new Product(productData.name, productData.isActive, productData.id)
    );
  },
};

export default productService;
