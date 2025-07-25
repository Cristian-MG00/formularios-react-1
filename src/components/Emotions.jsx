import { useState } from "react";

const Emotions = () => {
  const emotionStatus = {
    feliz: "yellow",
    triste: "blue",
    enojado: "red",
    relajado: "green",
    sorprendido: "violet",
  };

  const [emotion, setEmotion] = useState("");
  const [color, setColor] = useState("");

  const hundleChange = (e) => {
    setEmotion(e.target.value); //estado de animo actualizado
    setColor(emotionStatus[e.target.value]); //color actualizado por medio del color asociado a la propiedad con el mismo nombre que guarda emotion actualizado
  };

  return (
    <section>
      <h3>El color seleccionado es: {color}</h3>
      <form>
        <select value={emotion} onChange={hundleChange}>
          <option value="">Elegir</option>
          <option value="feliz">Feliz</option>
          <option value="triste">Triste</option>
          <option value="enojado">Enojado</option>
          <option value="relajado">Relajado</option>
          <option value="sorprendido">Sorprendido</option>
        </select>
      </form>
      <div className="cont-emotion">
        <p style={{ color: color }}>
          Hoy me siento {emotion} y eso se ve como
          <p style={{ backgroundColor: color }} className="emotion-color"></p>
        </p>
      </div>
    </section>
  );
};

export { Emotions };
