import { Card } from "react-bootstrap";

const Frase = ({ personaje }) => {
  return (
    <section className="my-5">
      <h2>{personaje.character}</h2>
      <hr />
      <img className="mb-3" src={personaje.image} alt={personaje.character} />
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>{personaje.quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              {personaje.character} x in <cite title="Source Title">The Simpson's</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
