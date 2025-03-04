import { Col, Container, Row } from "react-bootstrap";
import cvImage from "../assets/img/cv.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col xxl="6" xl="7" lg="7" md="12" className=" text-xxl-start">
            <p className="fs-2">
              Suhayb is a
              <span className="ms-2 me-2 text-primary">
                full-stack developer
              </span>
              from Iraq, Erbil
            </p>
            <p className="fs-3">Entrust web application development to me.</p>
            <br />

            <div
              style={{ width: "150px" }}
              className="text-center border p-2 border-dark border-2 hover-overlay"
            >
              <Link className="text-decoration-none" to="/contact">
                <h4>Contact Me</h4>
              </Link>
            </div>
            <br />
          </Col>
          <Col xxl="1" xl="1" lg="1" md="12"></Col>

          <Col xxl="5" xl="4" lg="4" md="12" className="text-center">
            <img src={cvImage} width="400px" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
