import { Col, Container, Row } from "react-bootstrap";
import cvImage from "../assets/img/cv.png";
import { Link } from "react-router-dom";
import Project from "./Project";
import Skill from "./Skill";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <section id="home" className="py-5">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xxl="6" xl="7" lg="7" md="12" className="text-xxl-start">
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

              <div className="contact-btn mt-3">
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
            </Col>

            <Col xxl="5" xl="4" lg="4" md="12" className="text-center">
              <img src={cvImage} width="400px" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

 {/* Project Page */}
      <div>
        <Project />
      </div>

      {/* Skill Page */}
      <div>
        <Skill />
      </div>

      {/* About Me */}
      <div>
        <About />
      </div>

      {/* Contact */}
      <div>
        <Contact />
      </div>
    </>
  );
}
