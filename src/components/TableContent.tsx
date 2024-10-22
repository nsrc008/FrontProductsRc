import { useState } from "react";
import Button from "./Button";

interface TableContentProps {
  id?: number;
  product?: string;
  onUpdate: (id: number, name: string) => void; // Callback para actualizar el producto
  onDelete?: () => void; // Agrega esta prop
}

export function TableContent(props: TableContentProps) {
  const { id, product, onUpdate, onDelete } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product);

  const handleEditClick = () => {
    if (isEditing && id && name) {
      onUpdate(id, name); // Llama a la función onUpdate si está guardando
    }
    setIsEditing(!isEditing); // Cambia el modo de edición
  };

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>
        {isEditing ? (
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          name
        )}
      </td>
      <td>
        <Button
          className="mx-2"
          variant={isEditing ? "success" : "info"}
          onClick={handleEditClick}
        >
          {isEditing ? "Guardar" : "Editar"}
        </Button>
        <Button variant="danger" className="mx-2" onClick={onDelete}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
}

export default TableContent;
