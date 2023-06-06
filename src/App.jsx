import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container, Spinner } from "react-bootstrap";
import Frase from "./components/Frase";
import { useState, useEffect } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setMostrarSpinner(true);
      //Petición GET
      const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
      const dato = await respuesta.json();
      console.log(respuesta);
      setPersonaje(dato[0]);
      setMostrarSpinner(false);
      console.log(personaje);
    } catch (error) {
      console.log(error);
    }
  };

  const componenteRenderizado = mostrarSpinner ? (
    <div className="my-5">
      <Spinner animation="border" variante="primary"></Spinner>
    </div>
  ) : (
    <Frase personaje={personaje} />
  );

  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        {componenteRenderizado}
        <Button variant="warning" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
