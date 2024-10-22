import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

function Table(props: TableProps) {
  const { children } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Producto</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;