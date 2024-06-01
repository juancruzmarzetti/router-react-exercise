import { Link, useParams } from "react-router-dom";
import Faq from "./Faq";

const Faqs = () => {
  const preguntas = [
    {
      id:1,
      title: "¿Puedo hacer el curso sin tener experiencia y/o conocimientos previos?",
      descripcion: "Sí. En Digital House puedes aprender desde cero. Según el curso al que te anotaste, vamos a enviarte contenido previo online..."
    },
    {
      id:2,
      title: "¿Las vacantes son limitadas?",
      descripcion: "Sí. Tienen una capacidad máxima de entre 50 y 75 personas, dependiendo el curso."
    }
  ];

  const params = useParams();
  const pregunta = preguntas.find((pregunta) => pregunta.id === parseInt(params.id));

  return (
    <div>
        <h1>FAQ: desde la pregunta específica {params.id}</h1>
        <section>
          <h3>{pregunta?.title}</h3>
          <p>{pregunta?.descripcion}</p>
        </section>
    </div>
  )
}

export default Faqs