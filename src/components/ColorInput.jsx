import { useState } from "react";

const ColorInput = () => {
  const [color, setColor] = useState("");
  const [complementary, setComplementary] = useState("");

  // cuando se hace cambios en el input esos cambios se graban en el estado name
  const hundleChange = (e) => {
    setColor(e.target.value);
    setComplementary(getComplementaryColor(e.target.value));
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    console.log("Quiero pintar mi pared de: " + color);
  };

  const getComplementaryColor = (color) => {
    // quitar el # si esta presente
    let com = color.replace(`#`, ``);

    // separar los componentes RGB
    const r = 255 - parseInt(com.slice(0, 2), 16);
    const g = 255 - parseInt(com.slice(2, 4), 16);
    const b = 255 - parseInt(com.slice(4, 6), 16);

    // convertir a hexadecimal y rellenar con ceros si es necesario
    const toHex = (n) => n.toString(16).padStart(2, "0");

    // retornar el color complementario
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  return (
    <>
      <form onSubmit={hundleSubmit}>
        <h1>Ingrese un color:</h1>
        <p>Color seleccionado: {color}</p>
        <p>Color complementario: {complementary}</p>
        <input type="color" onChange={hundleChange} />
        <button>Enviar</button>
      </form>
      <h2>El color seleccionado es:</h2>
      <div className="cont-colors">
        <div style={{ backgroundColor: color }} className="check-color"></div>
        <div
          style={{ backgroundColor: complementary }}
          className="check-color"
        ></div>
      </div>
    </>
  );
};

export { ColorInput };
