import Citas from "./Citas"
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const Formulario = () => {
  return (
    <>
      <Card>
        <Card.Header className="text-center">Formulario para cita</Card.Header>
        <Form className="m-3">
          <Form.Group>
            <Form.Label>Nombre de Mascota</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de mascota"
              required
              minLength={10}
              maxLength={30}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nombre de dueño</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de dueño"
              required
              minLength={10}
              maxLength={30}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="dd/mm/yyyy"
                  required
                  minLength={8}
                  maxLength={10}
                ></Form.Control>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="hh:mm"
                  required
                  minLength={5}
                  maxLength={5}
                ></Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Form.Label>Sintomas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sintomas"
              required
              minLength={10}
              maxLength={100}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="my-3">
            Cargar cita
          </Button>
        </Form>
      </Card>
      <Citas></Citas>
    </>
  );
};

export default Formulario;
