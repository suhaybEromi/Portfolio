import { Container, Row, Col, Card } from "react-bootstrap";

const skills = [
  { title: "Languages", items: ["JavaScript", "Node.js", "HTML", "CSS"] },
  { title: "Frameworks", items: ["Express.js", "React.js", "Bootstrap"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "GraphQL"] },
  { title: "ORM / ODM", items: ["Sequelize", "Mongoose"] },
  { title: "Tools", items: ["Git & GitHub", "Postman & VS Code", "Windows"] },
  { title: "Graphic Design", items: ["Figma"] },
];

export default function MySkill() {
  return (
    <Container>
      <Row>
        {skills.map((skill, index) => (
          <Col key={index} className="mt-5" xxl="5" xl="5" lg="5" md="12">
            <Card
              style={{ width: "19rem" }}
              className="w-100 border-1 border-light"
            >
              <Card.Body>
                <Card.Title className="fs-4">{skill.title}</Card.Title>
                <hr />
                <div>
                  <ul>
                    {skill.items.map((item, index) => (
                      <li key={index} className="fs-5">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
