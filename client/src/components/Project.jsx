import { Col, Container, Row, Card, InputGroup } from "react-bootstrap";
import cvImage from "../assets/img/cv.png";
import websiteImage from "../assets/img/website.png";
import { Link } from "react-router-dom";
import shopImage from "../assets/img/shop.png";
import managmentImage from "../assets/img/managment.png";
import noteImage from "../assets/img/note.png";
import weatherImage from "../assets/img/weather.png";

export default function Project() {
  const projects = [
    {
      id: 1,
      name: "shop",
      description: "Create project to buy clothes",
      image: shopImage,
      website: "https://node-complete-udemy-1043c6db969a.herokuapp.com",
    },
    {
      id: 2,
      name: "managment",
      description: "Create management project",
      image: managmentImage,
      website: "https://project-managment-one.vercel.app",
    },
    {
      id: 3,
      name: "note todo",
      description: "Create a Todo app",
      image: noteImage,
      website: "https://note---app.web.app",
    },
    {
      id: 4,
      name: "weathere",
      description: "Create a weather app",
      image: weatherImage,
      website: "https://appweathere.netlify.app",
    },
  ];

  return (
    <section id="project">
      <div style={{ marginTop: "120px", marginBottom: "50px" }}>
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
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <hr />
                    <Card.Title className="fs-2">{project.name}</Card.Title>
                    <hr />
                    <Card.Text className="fs-5">
                      {project.description}
                    </Card.Text>
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
                    </InputGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}
