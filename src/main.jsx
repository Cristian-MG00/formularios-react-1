import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TextInput } from "./components/TextInput";
import { ColorInput } from "./components/ColorInput";
import "./main.css";
import { Emotions } from "./components/Emotions";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Emotions />
  </StrictMode>
);
