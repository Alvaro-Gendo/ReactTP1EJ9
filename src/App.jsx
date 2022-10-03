import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
  return (
    <Container className="App">
      <h1 className="text-center">Veterinaria</h1>
      <hr/>
    <Formulario/>
    </Container>
  );
}

export default App;
