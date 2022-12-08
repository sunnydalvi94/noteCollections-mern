import React from "react";
import { Container, Row ,Col} from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Container>
        <Row>
            <Col className="d-flex justify-content-center">
            Copyright &copy; Note Collection
            </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
