import { Col, Container, Row } from "react-bootstrap";
import cvImage from "../assets/img/cv.png";
import { Link } from "react-router-dom";
import Project from "./Project";
import Skill from "./Skill";
import About from "./About";

export default function Home() {
  return (
    <>
      <section id="home">
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
              <p className="fs-3 text-white-50">
                Entrust web application development to me.
              </p>
              <br />

              <div className="contact-btn">
                <Link
                  to="/contact"
                  className="text-decoration-none"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("contact").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <h4>Contact Me</h4>
                </Link>
              </div>

              <br />
            </Col>
            <Col xxl="1" xl="1" lg="1" md="12"></Col>

            <Col xxl="5" xl="4" lg="4" md="12" className="text-center">
              <img src={cvImage} width="400px" className="img-fluid" />
            </Col>

            <div className="text-start border border-2 rounded-3 p-4 mt-5 mb-5 w-75">
              <Col xxl="12">
                <h1>Success doesn’t come to you - you go to it.</h1>
              </Col>
            </div>
          </Row>
        </Container>
      </section>

      {/* Project Page */}

      <br />
      <br />
      <br />
      <section id="project">
        <Project />
      </section>

      {/* Skill Page */}

      <br />
      <br />
      <br />
      <br />
      <section id="skill">
        <Skill />
      </section>

      {/* About Me */}

      <br />
      <br />
      <br />
      <br />
      <section id="about">
        <About />
      </section>
    </>
  );
}
