import { Col, Container, Row, Card } from "react-bootstrap";

const skills = [
  { title: "Languages", items: ["JavaScript", "Node.js", "HTML", "CSS"] },
  { title: "Frameworks", items: ["Express.js", "React.js", "Bootstrap"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "GraphQL"] },
  { title: "ORM / ODM", items: ["Sequelize", "Mongoose"] },
  { title: "Tools", items: ["Git & GitHub", "Postman & VS Code", "Windows"] },
  { title: "Graphic Design", items: ["Figma"] },
];

export default function Skill() {
  return (
    <section id="skill">
      <div className="py-5">
        <Container>
          <Row>
            <Col xxl="8" xl="8" lg="8" md="12">
              <div className="d-flex align-items-center">
                <h1 className="mb-0 me-3">#skills</h1>
                <div className="border border-primary w-100"></div>
              </div>
            </Col>

            {skills.map((skill, index) => (
              <Col key={index} className="mt-4" xxl="5" xl="5" lg="5" md="12">
                <Card className="w-100 border-1 border-light">
                  <Card.Body>
                    <Card.Title className="fs-4">{skill.title}</Card.Title>
                    <hr />
                    <ul>
                      {skill.items.map((item, i) => (
                        <li key={i} className="fs-5">
                          {item}
                        </li>
                      ))}
                    </ul>
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
