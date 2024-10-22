import productService from "../services/productService"; // Importa el servicio que interactúa con la API
import { Product } from "../models/Product"; // Importa el modelo del producto si tienes un modelo definido

// Función para obtener todos los productos
export const fetchProducts = async (): Promise<Product[]> => {
  return await productService.fetchAll();
};

// Función para agregar un producto
export const addProduct = async (newProductName: string): Promise<Product | null> => {
  if (newProductName.trim()) {
    const newProduct = Product.create(newProductName); // Suponiendo que tienes un modelo Product con un método create
    return await productService.create(newProduct);
  }
  return null;
};

// Función para actualizar un producto
export const updateProduct = async (id: number, name: string): Promise<void> => {
  const updatedProduct = Product.create(name);
  await productService.update(id, updatedProduct);
};

// Función para eliminar un producto
export const deleteProduct = async (id: number): Promise<void> => {
  if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
    await productService.delete(id);
  }
};

// Función para buscar productos
export const searchProducts = async (searchTerm: string): Promise<Product[]> => {
  return searchTerm
    ? await productService.search(searchTerm)
    : await productService.fetchAll();
};
