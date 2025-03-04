import { Col, Container, Row, Card, InputGroup } from "react-bootstrap";
import cvImage from "../assets/img/cv.png";
import websiteImage from "../assets/img/website.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Project() {
  const projects = [
    {
      id: 1,
      name: "Project One",
      description: "This is the first project description.",
      image: cvImage,
      website: "#",
      github: "#",
    },
    {
      id: 2,
      name: "Project Two",
      description: "This is the second project description.",
      image: cvImage,
      website: "#",
      github: "#",
    },
  ];

  return (
    <div className="mt-5 mb-2">
      <Container>
        <Row className="align-items-center">
          <Col xxl="8" xl="8" lg="8" md="12">
            <div className="d-flex align-items-center">
              <h1 className="mb-0 me-3">#projects</h1>
              <div className="border border-primary w-100"></div>
            </div>
          </Col>

          {projects.map(project => (
            <Col
              key={project.id}
              className="mt-5"
              xxl="6"
              xl="6"
              lg="6"
              md="12"
            >
              <Card
                style={{ width: "19rem" }}
                className="w-100 border-1 border-light"
              >
                <Card.Body>
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      src={project.image}
                      className="img-fluid"
                      style={{ width: "70%", height: "auto" }}
                    />
                  </div>
                  <hr />
                  <Card.Title className="fs-2">{project.name}</Card.Title>
                  <hr />
                  <Card.Text className="fs-5">{project.description}</Card.Text>
                  <hr />

                  <InputGroup className="align-items-center">
                    {/* Website Button */}
                    <div className="border rounded-3">
                      <button className="btn d-flex align-items-center px-3">
                        <img
                          width="25px"
                          src={websiteImage}
                          alt="Website"
                          className="me-2"
                        />
                        <Link
                          className="text-decoration-none"
                          to={project.website}
                        >
                          WEBSITE
                        </Link>
                      </button>
                    </div>

                    {/* GitHub Button */}
                    <div className="border rounded-3 ms-3">
                      <button className="btn d-flex align-items-center px-3">
                        <FaGithub className="fs-4 me-2" />
                        <Link
                          to={project.github}
                          className="text-decoration-none"
                        >
                          GITHUB
                        </Link>
                      </button>
                    </div>
                  </InputGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
