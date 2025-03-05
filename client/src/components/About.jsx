import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="mb-5" xxl="8" xl="8" lg="8" md="12">
            <div className="d-flex align-items-center">
              <h1 className="mb-0 me-3">#about-me</h1>
              <div className="border border-primary flex-grow-1"></div>
            </div>
          </Col>

          <Col className="mt-5" xxl="8" xl="8" lg="8" md="12">
            <div className=" mb-5 d-flex align-items-center">
              <h3 className="mb-0 me-3">Hi, i'm Suhayb Mohammed</h3>
            </div>
            <p className="fs-5 text-white-50">About me </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
