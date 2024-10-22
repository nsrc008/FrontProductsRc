import React, { useState, useEffect } from "react";
import Card, { CardBody } from "./components/Card";
import Table from "./components/Table";
import { TableContent } from "./components/TableContent";
import Button from "./components/Button";
import Form from "./components/Form";
import { fetchProducts, addProduct, updateProduct, deleteProduct, searchProducts } from "./actions/productActions";
import { Product } from "./models/Product";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProductName, setNewProductName] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
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
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const handleSearch = async () => {
    const filteredProducts = await searchProducts(searchTerm);
    setProducts(filteredProducts);
  };

  return (
    <Card>
      <CardBody title="Productos" text="Acciones para cada uno de los productos" />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          {isAdding && (
            <Form
              inputValue={newProductName}
              onInputChange={(e) => setNewProductName(e.target.value)}
              onSubmit={handleAddProduct}
            />
          )}
          <Button
            variant={isAdding ? "danger" : "success"}
            className="ms-2"
            onClick={() => setIsAdding(!isAdding)}
          >
            {isAdding ? "Cancelar" : "Añadir"}
          </Button>
        </div>
        <div className="d-flex align-items-center">
          <input
            type="text"
            placeholder="Buscar por ID o nombre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control me-2"
            style={{ width: "200px" }}
          />
          <Button
            variant="primary"
            style={{ marginLeft: "10px" }}
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </div>
      </div>
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
    </Card>
  );
};

export default App;
