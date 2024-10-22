import React, { useState, useEffect } from "react";
import Card, { CardBody } from "./components/Card";
import Table from "./components/Table";
import { TableContent } from "./components/TableContent";
import Button from "./components/Button";
import Form from "./components/Form";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
} from "./actions/productActions";
import { Product } from "./models/Product";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newProductName, setNewProductName] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products"); // Manejo de error
      } finally {
        setLoading(false); // Cambiar el estado de carga
      }
    };
    loadProducts();
  }, []);

  const handleAddProduct = async () => {
    const createdProduct = await addProduct(newProductName);
    if (createdProduct) {
      setProducts((prevProducts) => [...prevProducts, createdProduct]);
      setNewProductName("");
    }
    setIsAdding(false);
  };

  const handleUpdateProduct = async (id: number, name: string) => {
    await updateProduct(id, name);
    const updatedProducts = await fetchProducts();
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id);
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const handleSearch = async () => {
    const filteredProducts = await searchProducts(searchTerm);
    setProducts(filteredProducts);
  };

  return (
    <Card>
      <CardBody
        title="Productos"
        text="Acciones para cada uno de los productos"
      />

      {/* Contenedor principal para las acciones */}
      <div className="row mb-3">
        {/* Columna para Añadir producto */}
        <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-md-center mb-3 mb-md-0">
          {isAdding && (
            <Form
              inputValue={newProductName}
              onInputChange={(e) => setNewProductName(e.target.value)}
              onSubmit={handleAddProduct}
            />
          )}
          <Button
            variant={isAdding ? "danger" : "success"}
            className="ms-md-2 w-md-auto"
            onClick={() => setIsAdding(!isAdding)}
          >
            {isAdding ? "Cancelar" : "Añadir"}
          </Button>
        </div>

        {/* Columna para Buscar producto */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-md-end">
          <input
            type="text"
            placeholder="Buscar por ID o nombre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control me-2 w-100 w-md-auto"
          />
          <Button
            variant="primary"
            className="ms-md-2 w-md-auto" 
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </div>
      </div>

      {/* Contenido de la tabla */}
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Table>
          {products.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center">
                No se encontraron productos.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <TableContent
                key={product.id}
                id={product.id!}
                product={product.name}
                onUpdate={handleUpdateProduct}
                onDelete={() => handleDeleteProduct(product.id!)}
              />
            ))
          )}
        </Table>
      )}
    </Card>
  );
};

export default App;
