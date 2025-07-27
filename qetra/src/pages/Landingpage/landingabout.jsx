import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Landingnav from "../../components/section/landingnav";
import AboutHero from "../../assets/about-hero.png";
import MissionImg from "../../assets/mission.png";
import Value1 from "../../assets/value1.png";
import Value2 from "../../assets/value2.png";
import Value3 from "../../assets/value3.png";
import Team1 from "../../assets/team1.png";
import Team2 from "../../assets/team2.png";
import Team3 from "../../assets/team3.png";
import Footer from "../../components/section/footer";


const Landingabout = () => {
  return (
    <main>
    {/* Top Navigation */}
      <Landingnav />

      {/* HERO SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="fw-bold text-success mb-3">About Qetra</h1>
              <p className="fs-5 text-muted">
                At Qetra, we believe banking should be simple, secure, and
                built around you. Our mission is to empower individuals,
                families, and businesses with financial solutions that make
                life easier and dreams achievable.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={AboutHero}
                alt="About Qetra"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* OUR MISSION */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <img
                src={MissionImg}
                alt="Our Mission"
                className="img-fluid rounded"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold text-success mb-3">Our Mission</h2>
              <p className="text-muted">
                We’re committed to providing innovative banking services that
                empower our customers to achieve financial freedom. By leveraging
                cutting‑edge technology and a customer‑first mindset, Qetra
                continues to redefine the way people bank.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* OUR VALUES */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-4 text-success">Our Core Values</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Value1}
                  style={{ height: "80px", width: "80px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Integrity</Card.Title>
                  <Card.Text className="text-muted">
                    We uphold transparency and honesty in all our services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Value2}
                  style={{ height: "80px", width: "80px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Innovation</Card.Title>
                  <Card.Text className="text-muted">
                    We build with technology and creativity for a better future.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Value3}
                  style={{ height: "80px", width: "80px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Customer First</Card.Title>
                  <Card.Text className="text-muted">
                    Every decision we make is guided by your needs and goals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* OUR TEAM SECTION */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4 text-success">Meet Our Team</h2>
          <p className="text-center text-muted mb-5">
            The passionate individuals behind Qetra’s innovation and growth.
          </p>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Team1}
                  style={{ width: "150px", height: "150px", margin: "0 auto", objectFit: "cover" }}
                  className="rounded-circle mb-3"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Omajuwa Emmanuel</Card.Title>
                  <Card.Text className="text-muted">CEO & Founder</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Team2}
                  style={{ width: "150px", height: "150px", margin: "0 auto", objectFit: "cover" }}
                  className="rounded-circle mb-3"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">John Smith</Card.Title>
                  <Card.Text className="text-muted">CTO</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Team3}
                  style={{ width: "150px", height: "150px", margin: "0 auto", objectFit: "cover" }}
                  className="rounded-circle mb-3"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Sarah Lee</Card.Title>
                  <Card.Text className="text-muted">Head of Operations</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #008060, #00a86b)",
          color: "#fff",
        }}
      >
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col md={8} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">Join the Qetra Family Today</h2>
              <p className="mb-0 fs-5">
                Experience secure, innovative, and customer‑focused banking like never before.
              </p>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center justify-content-md-end gap-3"
            >
              <Button variant="light" className="fw-bold px-4">
                Get Started
              </Button>
              <Button variant="outline-light" className="fw-bold px-4">
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </main>
  );
};

export default Landingabout;
