import { Card, ListGroup, ListGroupItem, Col, Button } from "react-bootstrap";

const ItemCitas = () => {
  return (
    <>
      <Col sm={12} md={6} lg={4}>
        <Card className="mt-2">
          <Card.Header>
            <p>Dueño:</p>
            <p>Mascota:</p>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroupItem>Fecha:</ListGroupItem>
              <ListGroupItem>Hora:</ListGroupItem>
              <ListGroupItem>Sintomas:</ListGroupItem>
            </ListGroup>
          <Button className="my-2" variant="danger">Borrar</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ItemCitas;
