import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <section id="about">
      <div className="py-5 mb-5">
        <Container>
          <Row>
            <Col xxl="8" xl="8" lg="8" md="12">
              <div className="d-flex align-items-center">
                <h1 className="mb-0 me-3">#about-me</h1>
                <div className="border border-primary flex-grow-1"></div>
              </div>
            </Col>

            <Col className="mt-5 mb-5" xxl="8" xl="8" lg="8" md="12">
              <h3 className="mb-3">Hi, I'm Suhayb Mohammed</h3>
              <h5 className="text-white-50">
                I am a web developer from Iraq, currently residing in Erbil. I
                graduated from the Department of Information Technology at
                Khabat Institute. I have a strong background in website design,
                and my projects showcase my skills. Entrust your website design
                to me.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
