import React from "react";
import Landingnav from "../../components/navbar/landingnav";
import Marquee from "../../components/layouts/marquee";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import Heroimage from "../../assets/hero-image.png";
import Ourservice from "../../assets/ourservice.png";
import TransferIcon from "../../assets/transfer-icon.png";
import PaymentIcon from "../../assets/payment-icon.png";
import AboutImage from "../../assets/about-image.png";
import SecureIcon from "../../assets/secure-icon.png";
import User1 from "../../assets/user1.jpg";
import User2 from "../../assets/user2.jpg";
import User3 from "../../assets/user3.jpg";
import Cbn from "../../assets/cbn.png";
import Ndic from "../../assets/ndic.png";
import "./style/home.css";
import { Facebook, Twitter, Linkedin } from "react-bootstrap-icons";

const LandingHome = () => {
  return (
    <main>
      {/* ✅ Top Navigation */}
      <Landingnav />

      {/* ✅ Hero Section */}
      <section className="hero-gradient-bg mt-5 px-3">
        <Container fluid className="px-md-5 py-3">
          <Row className="align-items-center">
            {/* ▶ Left: Hero Text */}
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <div className="left-hero text-center text-lg-start">
                <h1 className="left-header mb-3">
                  Your Money, <br />
                  Your Dreams, <br />
                  Our Priority.
                </h1>
                <p className="hero-text-color mb-4">
                  Your journey matters to us. At Qetra, we work every day to <br />
                  create solutions that empower individuals, families, and <br />
                  businesses because when you succeed, our community thrives.
                </p>
                <div>
                  <Button variant="success" className="me-2 mb-2">
                    Register Now
                  </Button>
                  <Button variant="outline-success" className="mb-2">
                    Login
                  </Button>
                </div>
              </div>
            </Col>

            {/* ▶ Right: Hero Image and Quick Features */}
            <Col xs={12} lg={6} className="position-relative">
              <div className="text-center">
                <img
                  src={Heroimage}
                  alt="Qetra hero"
                  className="img-fluid mb-4 w-50 mx-auto d-block d-xs-none"
                />
              </div>

              {/* ▶ Bottom overlay: quick feature highlights */}
              <div className="position-absolute bottom-0 start-0 w-100">
                <Row className="g-4 text-center text-md-start p-3">
                  <Col xs={12} md={6}>
                    <h2 className="hero-text-color">01</h2>
                    <h3 className="hero-text-color">Fast Transfer</h3>
                    <p className="hero-text-color">
                      Send and receive money instantly with Qetra’s secure,
                      lightning-fast transfer system.
                    </p>
                  </Col>

                  <Col xs={12} md={6}>
                    <h2 className="hero-text-color">02</h2>
                    <h3 className="hero-text-color">Easy to Use</h3>
                    <p className="hero-text-color">
                      Qetra’s intuitive platform is simple and seamless, making
                      every banking task effortless.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Partner/Info Marquee */}
      <Marquee />

      {/* ✅ Services Section */}
      <section className="py-3">
        <h2 className="text-center mb-4 fw-bold text-success">Our Services</h2>
        <Container>
          <Row className="align-items-center">
            {/* ▶ Services text */}
            <Col xs={12} md={6} className="mb-4 mb-md-0">
              <h4 className="text-muted mb-3">Empowering your financial journey</h4>
              <p className="text-secondary">
                At Qetra, we provide seamless banking solutions tailored to your
                needs. From fast transfers to secure savings and business support,
                our services are designed to help you achieve your dreams with
                confidence and ease.
              </p>
            </Col>

            {/* ▶ Services image */}
            <Col xs={12} md={6} className="text-center">
              <img
                src={Ourservice}
                alt="Our Services"
                className="img-fluid rounded shadow w-75 mx-auto d-block"
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Key Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4 fw-bold text-success">Key Features</h2>
          <p className="text-center text-muted mb-5">
            Explore the powerful tools Qetra offers to make your banking experience effortless.
          </p>

          <Row className="g-4">
            {/* ▶ Feature 1 */}
            <Col xs={12} md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={TransferIcon}
                  style={{ height: "80px", width: "80px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Instant Transfers</Card.Title>
                  <Card.Text className="text-muted">
                    Send and receive money in seconds with our secure transfer system.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* ▶ Feature 2 */}
            <Col xs={12} md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={PaymentIcon}
                  style={{ height: "80px", width: "80px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Bill Payments</Card.Title>
                  <Card.Text className="text-muted">
                    Pay your bills and subscriptions easily within the Qetra app.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* ▶ Feature 3 */}
            <Col xs={12} md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={SecureIcon}
                  style={{ height: "80px", width: "80px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Secure Banking</Card.Title>
                  <Card.Text className="text-muted">
                    Your data and transactions are protected with top‑level security.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ About Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            {/* ▶ About Image */}
            <Col xs={12} md={6} className="mb-4 mb-md-0 text-center">
              <img
                src={AboutImage}
                alt="About Qetra"
                className="img-fluid rounded shadow mx-auto d-block"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </Col>

            {/* ▶ About Text */}
            <Col xs={12} md={6}>
              <h2 className="fw-bold mb-3">Why Choose Qetra?</h2>
              <p className="text-muted mb-4">
                At Qetra, we are more than just a bank—we’re your trusted partner
                on your financial journey. Our mission is to empower individuals,
                families, and businesses with secure, simple, and innovative
                solutions that make banking effortless.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✅ Licensed by the Central Bank of Nigeria</li>
                <li className="mb-2">✅ Insured by NDIC for your peace of mind</li>
                <li className="mb-2">✅ 24/7 customer support to guide you</li>
                <li className="mb-2">✅ User‑friendly and secure platform</li>
              </ul>
              <Button variant="success">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Security Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-3">Your Money Is Safe With Qetra</h2>
          <p className="text-center text-muted mb-5">
            We are fully licensed and regulated by the Central Bank of Nigeria (CBN) and 
            insured by the Nigeria Deposit Insurance Corporation (NDIC). Your transactions and data 
            are protected with industry‑leading security standards.
          </p>

          {/* ▶ Regulatory Logos */}
          <Row className="justify-content-center align-items-center text-center g-4">
            <Col xs="auto">
              <div className="d-inline-flex align-items-center">
                <img
                  src={Cbn}
                  alt="CBN Logo"
                  style={{ height: "60px", marginRight: "10px" }}
                />
                <span className="fw-semibold">Licensed by CBN</span>
              </div>
            </Col>
            <Col xs="auto">
              <div className="d-inline-flex align-items-center">
                <img
                  src={Ndic}
                  alt="NDIC Logo"
                  style={{ height: "60px", marginRight: "10px" }}
                />
                <span className="fw-semibold">Insured by NDIC</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Testimonials Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-3">What Our Users Say</h2>
          <p className="text-center text-muted mb-5">
            Thousands of happy customers trust Qetra every day. Here’s what a few of them have to say:
          </p>

          {/* ▶ User Testimonial Carousel */}
          <Carousel variant="dark" indicators={false}>
            <Carousel.Item>
              <div className="text-center">
                <img
                  src={User1}
                  alt="Happy user"
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <blockquote className="blockquote">
                  <p className="mb-3">
                    “Qetra has completely transformed the way I handle my business
                    payments. Fast, secure, and so easy to use!”
                  </p>
                  <footer className="blockquote-footer">
                    Jame K. <cite title="Source Title">Entrepreneur</cite>
                  </footer>
                </blockquote>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center">
                <img
                  src={User2}
                  alt="Happy user"
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <blockquote className="blockquote">
                  <p className="mb-3">
                    “I love how simple and fast it is to transfer money with Qetra.
                    It’s truly a game changer for my finances.”
                  </p>
                  <footer className="blockquote-footer">
                    Amina O. <cite title="Source Title">Freelancer</cite>
                  </footer>
                </blockquote>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center">
                <img
                  src={User3}
                  alt="Happy user"
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <blockquote className="blockquote">
                  <p className="mb-3">
                    “With Qetra, I feel secure and confident. My transactions are
                    seamless and I can focus on what matters most.”
                  </p>
                  <footer className="blockquote-footer">
                    Michael T. <cite title="Source Title">Student</cite>
                  </footer>
                </blockquote>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* ✅ Call‑to‑Action Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #008060, #00a86b)",
          color: "#fff",
        }}
      >
        <Container>
          <Row className="align-items-center text-center text-md-start">
            {/* ▶ CTA text */}
            <Col md={8} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">Ready to Take Control of Your Finances?</h2>
              <p className="mb-0" style={{ fontSize: "1.1rem" }}>
                Join thousands of users who trust Qetra for seamless, secure, and
                smart banking solutions. Sign up today and start your journey with us.
              </p>
            </Col>

            {/* ▶ CTA buttons */}
            <Col
              md={4}
              className="d-flex justify-content-center justify-content-md-end gap-3"
            >
              <Button variant="light" className="fw-bold px-4">
                Register Now
              </Button>
              <Button variant="outline-light" className="fw-bold px-4">
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Footer */}
      <footer className="py-4 bg-dark text-light">
        <Container>
          <Row className="gy-4">
            {/* ▶ Footer brand */}
            <Col md={4} className="text-center text-md-start">
              <h4 className="fw-bold">Qetra</h4>
              <p className="small mb-0">
                Your trusted partner for secure, seamless, and smart banking.
              </p>
            </Col>

            {/* ▶ Footer quick links */}
            <Col md={4} className="text-center">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
                <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
                <li><a href="#about" className="text-light text-decoration-none">About</a></li>
                <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
              </ul>
            </Col>

            {/* ▶ Footer social links */}
            <Col md={4} className="text-center text-md-end">
              <h5 className="fw-bold mb-3">Connect With Us</h5>
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="https://facebook.com" className="text-light fs-4">
                  <Facebook />
                </a>
                <a href="https://twitter.com" className="text-light fs-4">
                  <Twitter />
                </a>
                <a href="https://linkedin.com" className="text-light fs-4">
                  <Linkedin />
                </a>
              </div>
            </Col>
          </Row>

          {/* ▶ Footer copyright */}
          <Row className="mt-4">
            <Col className="text-center">
              <small>© {new Date().getFullYear()} Qetra. All rights reserved.</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </main>
  );
};

export default LandingHome;
