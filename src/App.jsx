import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container, Spinner } from "react-bootstrap";
import Frase from "./components/Frase";
import { useState, useEffect} from "react"; 

function App() {
  const [personaje,setPersonaje]= useState({});

  useEffect(()=>{
    consultarAPI();
  },[]);

  const consultarAPI = async ()=>{
    try{
      //Petición GET
      const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
      const dato = await respuesta.json();
      console.log(respuesta);
      setPersonaje(dato[0])
      console.log(personaje)
    }catch(error){
      console.log(error);
    }

  }
  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        <Frase personaje={personaje}/>
        <Button variant="warning" onClick={consultarAPI}>Obtener frase</Button>
      </Container>
    </>
  );
}

export default App;
