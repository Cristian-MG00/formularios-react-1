import { useState } from "react";
import { Layout } from "../components/Layout";

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
    <Layout>
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
        <section className="cont-emotion">
          {/* operador ternario: si el primer valor es true, me mostrara el siguiente valor, pero si es false me mostrara el contenido que esta despues de los 2 puntos (:)*/}
          {/* {emotion ? (
          <p>
            Hoy me siento {emotion} y eso se ve como
            <p style={{ backgroundColor: color }} className="emotion-color"></p>
          </p>
        ) : (
          <p>No hay emoción seleccionada....</p>
        )} */}

          {/* operador and: solo me devuelve un true su los dos valores son true, en ese caso me mostrara el contenido en la ui */}
          {emotion && (
            <p>
              Hoy me siento {emotion} y eso se ve como
              <p
                style={{ backgroundColor: color }}
                className="emotion-color"
              ></p>
            </p>
          )}
          {!emotion && <p>No hay emoción seleccionada...</p>}
        </section>
      </section>
    </Layout>
  );
};

export { Emotions };
