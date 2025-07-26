import { useState } from "react";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";

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
    <>
      <Layout>
        <form onSubmit={hundleSubmit}>
          <h1>Ingrese un alumno a la lista:</h1>
          <p>Valor actualizado del estado: {name}</p>
          <input
            type="text"
            placeholder="Ingrese su nombre aqui:"
            onChange={hundleChange}
            value={name}
          />
          <Button color="green" text="Enviar">
            <i class="bx  bx-send-alt"></i>
          </Button>
          <Button color="red" text="Cancelar">
            <i class="bx  bx-siren"></i>
          </Button>
        </form>
      </Layout>
    </>
  );
};

export { TextInput };
