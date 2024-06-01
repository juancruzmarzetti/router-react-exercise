import React from 'react'
import { useParams } from 'react-router-dom'

const Faq = ({preguntas}) => {
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

export default Faq