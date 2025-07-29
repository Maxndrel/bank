import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Landingnav from "../../components/section/landingnav";
import InvestmentHero from "../../assets/investment-hero.png";
import Plan1 from "../../assets/plan1.png";
import Plan2 from "../../assets/plan2.png";
import Plan3 from "../../assets/plan3.png";
import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
import Step3 from "../../assets/step3.png";
import Why from "../../assets/why.png";
import Investor1 from "../../assets/investor1.jpg";
import Investor2 from "../../assets/investor2.jpg";
import Footer from "../../components/section/footer";


const Landinginvestment = () => {
  return (
    <main>
{/* Top Navigation */}
      <Landingnav />

      {/* HERO SECTION */}
      <section className="mt-5 py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0 text-center text-md-start">
              <h1 className="fw-bold text-success mb-3">Investment Opportunities</h1>
              <p className="fs-5 text-muted">
                Grow your wealth with Qetra’s carefully crafted investment plans.
                Whether you’re just starting out or looking to diversify, we have a plan for you.
              </p>
              <Button variant="success" className="mt-3 px-4 fw-bold">
                Get Started
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={InvestmentHero}
                alt="Investment Opportunities"
                className="img-fluid rounded shadow mx-auto d-block"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* INVESTMENT PLANS SECTION */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-success mb-4">Our Investment Plans</h2>
          <p className="text-center text-muted mb-5">
            Choose from a variety of flexible plans tailored to your financial goals.
          </p>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Plan1}
                  style={{ height: "100px", width: "100px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Starter Plan</Card.Title>
                  <Card.Text className="text-muted">
                    A low‑risk option designed for beginners and first‑time investors.
                  </Card.Text>
                  <Button variant="outline-success">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Plan2}
                  style={{ height: "100px", width: "100px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Growth Plan</Card.Title>
                  <Card.Text className="text-muted">
                    A balanced plan offering steady returns for growing portfolios.
                  </Card.Text>
                  <Button variant="outline-success">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Plan3}
                  style={{ height: "100px", width: "100px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Premium Plan</Card.Title>
                  <Card.Text className="text-muted">
                    Higher returns with a well‑managed, diversified investment portfolio.
                  </Card.Text>
                  <Button variant="outline-success">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHY INVEST WITH US SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold text-success mb-4">Why Invest with Qetra?</h2>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <ul className="list-unstyled fs-5 text-muted">
                <li className="mb-3">✅ Expert financial guidance and support.</li>
                <li className="mb-3">✅ Secure and transparent investment processes.</li>
                <li className="mb-3">✅ Flexible plans to suit your lifestyle and goals.</li>
                <li className="mb-3">✅ Proven track record of consistent growth.</li>
              </ul>
            </Col>
            <Col md={6} className="text-center">
              <div
                style={{
                  background: "#eaf8f1",
                  height: "400px",
                  width: "400px",
                  borderRadius: "12px",
                }}
                className="d-flex justify-content-center align-items-center shadow mx-auto d-block"
              >
                <img
                src={Why}
                alt="Investment Opportunities"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", width: "400px", objectFit: "cover" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 📌 SECTION 1: INVESTMENT PROCESS */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-success mb-4">How It Works</h2>
          <p className="text-center text-muted mb-5">
            Getting started with Qetra Investments is simple. Follow these steps to begin your journey.
          </p>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Step1}
                  style={{ height: "80px", width: "80px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Step 1: Sign Up</Card.Title>
                  <Card.Text className="text-muted">
                    Create your Qetra account in minutes to unlock investment opportunities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Step2}
                  style={{ height: "80px", width: "80px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Step 2: Choose a Plan</Card.Title>
                  <Card.Text className="text-muted">
                    Select the plan that matches your goals and investment style.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                <Card.Img
                  variant="top"
                  src={Step3}
                  style={{ height: "80px", width: "80px", margin: "0 auto" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Step 3: Start Earning</Card.Title>
                  <Card.Text className="text-muted">
                    Watch your investments grow with regular updates and reports.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 📌 SECTION 2: TESTIMONIALS */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-4 text-success">What Our Investors Say</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm p-3 text-center">
                <img
                  src={Investor1}
                  alt="Investor testimonial"
                  className="rounded-circle mb-3 mx-auto d-block"
                  style={{ width: "90px", height: "90px", objectFit: "cover" }}
                />
                <blockquote className="blockquote">
                  <p className="text-muted mb-3">
                    “Investing with Qetra has been a game changer. My savings are growing faster than I imagined!”
                  </p>
                  <footer className="blockquote-footer">Sarah L. <cite>Entrepreneur</cite></footer>
                </blockquote>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm p-3 text-center">
                <img
                  src={Investor2}
                  alt="Investor testimonial"
                  className="rounded-circle mb-3 mx-auto d-block"
                  style={{ width: "90px", height: "90px", objectFit: "cover" }}
                />
                <blockquote className="blockquote">
                  <p className="text-muted mb-3">
                    “Qetra’s premium plan gave me the confidence to invest bigger and smarter.”
                  </p>
                  <footer className="blockquote-footer">David K. <cite>Freelancer</cite></footer>
                </blockquote>
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
              <h2 className="fw-bold mb-3">Start Your Investment Journey Today</h2>
              <p className="mb-0 fs-5">
                Take control of your financial future with Qetra’s trusted investment solutions.
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
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* footer */}
      <Footer />
    </main>
  );
};

export default Landinginvestment;
