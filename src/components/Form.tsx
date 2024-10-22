import Button from "./Button";

interface FormProps {
  inputValue: string; // Valor del input
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Función para manejar el cambio de input
  onSubmit: () => void; // Función para manejar el envío del formulario
}

function Form({ inputValue, onInputChange, onSubmit }: FormProps) {
  return (
    <form className="row g-3">
      <div className="col-auto">
        <label className="visually-hidden">Email</label>
      </div>
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Nombre del nuevo producto"
        />
      </div>
      <div className="col-auto">
        <Button variant="primary" onClick={onSubmit}>
          Guardar
        </Button>
      </div>
    </form>
  );
}

export default Form;
