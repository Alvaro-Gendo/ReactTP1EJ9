import { Card, Row } from "react-bootstrap";
import ItemCitas from "./ItemCitas";

const Citas = () => {
  return (
    <>
      <Card className="mt-3">
        <Card.Header>
          <h3>Citas</h3>
        </Card.Header>
        <Card.Body>
          <Row>
              <ItemCitas></ItemCitas>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Citas;
