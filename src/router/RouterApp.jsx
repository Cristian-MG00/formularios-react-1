import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorInput } from "../components/ColorInput";
import { Emotions } from "../components/Emotions";
import { TextInput } from "../components/TextInput";
import { Home } from "../components/Home";
import { NotFound } from "../components/NotFound";

const RouterApp = () => {
  return (
    // Habilita la posibilidad de leer el historial de navegacion
    <BrowserRouter>
      {/* componente que contiene mi conjunto de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color" element={<ColorInput />} />
        <Route path="/emotions" element={<Emotions />} />
        <Route path="/text" element={<TextInput />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };
