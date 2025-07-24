import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TextInput } from "./components/TextInput";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TextInput />
  </StrictMode>
);
