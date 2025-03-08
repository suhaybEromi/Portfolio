import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaTelegram,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <div>
        <Container>
          <Row>
            <Col xxl="8" xl="8" lg="8" md="12">
              <div className="d-flex align-items-center">
                <h1 className="mb-0 me-3">#contacts</h1>
                <div className="border border-primary flex-grow-1"></div>
              </div>
            </Col>

            <Col className="mt-5" xxl="6" xl="6" lg="6" md="12">
              <div className="mb-4 d-flex align-items-center">
                <h5 className="mt-5 me-3 text-white-50">
                  If you have a project in mind, want to make things easier for
                  you, or improve your online business, call us or send us a
                  message to my Gmail.
                </h5>
              </div>
            </Col>

            <Col xxl="2" xl="2" lg="2" md="12"></Col>

            <Col className="mt-5 mb-3" xxl="4" xl="4" lg="4" md="12">
              <div className="border border-1 p-3 mb-2 d-flex flex-column align-items-start">
                <h5 className="mb-4">Message me here</h5>

                <div className="mb-4 d-flex align-items-center gap-2">
                  <FaWhatsapp className="text-white-50 fs-3" />
                  <Link
                    to="https://wa.me/9647500484170"
                    className="fs-5 text-decoration-none text-white-50"
                  >
                    WhatsApp
                  </Link>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <FaTelegram className="text-white-50 fs-3" />
                  <Link
                    to="https://t.me/suhayb_mohammed"
                    className="fs-5 text-decoration-none text-white-50"
                  >
                    Telegram
                  </Link>
                </div>
              </div>
            </Col>

            <div className="mt-5 border border-1"></div>

            {/* Layout for laptop (left: name & email, right: icons) */}
            <Col lg="6" className="mt-4 d-none d-lg-flex align-items-center">
              <div className="d-flex align-items-center gap-3">
                <h5>SUHAYB</h5>
                <Link
                  to="mailto:suhaibmuhammad083@gmail.com"
                  className="text-white-50 text-decoration-none"
                >
                  <h5>suhaibmuhammad083@gmail.com</h5>
                </Link>
              </div>
            </Col>

            <Col lg="5" className="mt-4 d-none d-lg-flex justify-content-end">
              <div className="d-flex gap-3">
                <Link
                  to="https://github.com/suhaybEromi"
                  className="text-white-50 text-decoration-none github-color"
                >
                  <h3>
                    <FaGithub />
                  </h3>
                </Link>

                <Link
                  to="https://www.linkedin.com/in/suhayb-mohammed-2797172a7/"
                  className="text-decoration-none change-color"
                >
                  <h3 className="text-white-50">
                    <FaLinkedin />
                  </h3>
                </Link>

                <Link
                  to="https://www.facebook.com/suhaib.mohammed.73594/"
                  className="text-white-50 text-decoration-none change-color"
                >
                  <h3>
                    <FaFacebook />
                  </h3>
                </Link>
              </div>
            </Col>

            {/* Mobile Layout (centered) */}
            <Col className="mt-4 d-flex flex-column align-items-center text-center d-lg-none">
              <h5>SUHAYB</h5>
              <Link
                to="mailto:suhaibmuhammad083@gmail.com"
                className="text-white-50 text-decoration-none mt-2"
              >
                <h5>suhaibmuhammad083@gmail.com</h5>
              </Link>

              <div className="d-flex justify-content-center gap-3 mt-3">
                <Link
                  to="https://github.com/suhaybEromi"
                  className="text-white-50 text-decoration-none github-color"
                >
                  <h3>
                    <FaGithub />
                  </h3>
                </Link>

                <Link
                  to="https://www.linkedin.com/in/suhayb-mohammed-2797172a7/"
                  className="text-decoration-none change-color"
                >
                  <h3 className="text-white-50">
                    <FaLinkedin />
                  </h3>
                </Link>

                <Link
                  to="https://www.facebook.com/suhaib.mohammed.73594/"
                  className="text-white-50 text-decoration-none change-color"
                >
                  <h3>
                    <FaFacebook />
                  </h3>
                </Link>
              </div>
            </Col>

            <style>
              {`
              .github-color:hover h3 {
                color: white !important;
              }
              .change-color:hover h3 {
                color: #0a66c2 !important;
              }
            `}
            </style>
          </Row>
        </Container>
      </div>
    </section>
  );
}
