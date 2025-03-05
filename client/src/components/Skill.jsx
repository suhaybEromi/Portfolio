import { Col, Container, Row, Card } from "react-bootstrap";
import MySkill from "./MySkill";

export default function Skill() {
  return (
    <div>
      <Container>
        <Row>
          <Col xxl="8" xl="8" lg="8" md="12">
            <div className="d-flex align-items-center">
              <h1 className="mb-0 me-3">#skills</h1>
              <div className="border border-primary w-100"></div>
            </div>
          </Col>

          <MySkill />
        </Row>
      </Container>
    </div>
  );
}
