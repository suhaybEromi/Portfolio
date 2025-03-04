import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  return (
    <>
      <div>
        <Navbar expand="lg" className="align-items-center custom-navbar">
          <Container>
            <Navbar.Brand>
              <h3>SUHAYB</h3>
            </Navbar.Brand>

            <Navbar.Toggle
              className="custom-toggle border-0"
              aria-controls="basic-navbar-nav"
            />

            <Navbar.Collapse id="basic-navbar-nav">
              <br />

              <Nav className="ms-auto">
                <Link to="/" className="text-decoration-none">
                  <p className="fs-4 mt-2 ms-2 me-3">#Home</p>
                </Link>

                <Link
                  to="/project"
                  className="text-decoration-none"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("project").scrollIntoView({
                      behavior: "smooth",
                      block: "start", // Makes sure it aligns properly
                    });
                  }}
                >
                  <p className="fs-4 mt-2 ms-2 me-3">#Projects</p>
                </Link>

                <Link
                  to="/skill"
                  className="text-decoration-none"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("skill").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <p className="fs-4 mt-2 ms-2 me-3">#Skills</p>
                </Link>

                <Link
                  to="/about"
                  className="text-decoration-none"
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("about").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <p className="fs-4 mt-2 ms-2 me-3">#About</p>
                </Link>

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
                  <p className="fs-4 mt-2 ms-2 me-3">#Contact</p>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
