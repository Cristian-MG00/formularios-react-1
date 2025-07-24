import { useState } from "react";

const TextInput = () => {
  const [name, setName] = useState("");

  // cuando se hace cambios en el input esos cambios se graban en el estado name
  const hundleChange = (e) => {
    setName(e.target.value);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: crypto.randomUUID(),
      name: name,
    };
    // enviar a un backend
    console.log(newUser);
    setName("");
  };

  return (
    <form onSubmit={hundleSubmit}>
      <h1>Ingrese un alumno a la lista:</h1>
      <p>Valor actualizado del estado: {name}</p>
      <input
        type="text"
        placeholder="Ingrese su nombre aqui:"
        onChange={hundleChange}
        value={name}
      />
      <button>Enviar</button>
    </form>
  );
};

export { TextInput };
