import React from "react";
import { Container, Row, Col, Form, Button, Card, Image } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegClock } from "react-icons/fa";
import Landingnav from "../../components/section/landingnav";
import Footer from "../../components/section/footer";
import ContactHero from "../../assets/contact-hero.jpg"; // Replace with your actual image path

const Landingcontact = () => {
  return (
    <main>
      {/* Top Navigation */}
      <Landingnav />

      {/* HERO SECTION */}
      <section className=" mt-5 py-5 bg-light">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={6}>
              <h1 className="fw-bold text-success mb-3">Get in Touch</h1>
              <p className="text-muted fs-5">
                We'd love to hear from you. Whether you have a question about services,
                pricing, or anything else our team is ready to answer all your questions.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <Image
                src={ContactHero}
                alt="Contact Us Illustration"
                fluid
                className="img-fluid rounded shadow mx-auto d-block"
                style={{ maxHeight: "370px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            {/* Contact Form */}
            <Col md={7}>
              <Card className="p-4 shadow-sm border-0">
                <h4 className="fw-bold mb-4 text-success">Send Us a Message</h4>
                <Form>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Type your message..." />
                  </Form.Group>

                  <Button variant="success" className="px-4">
                    Submit
                  </Button>
                </Form>
              </Card>
            </Col>

           {/* Contact Info */}
            <Col md={5}>
            <Card className="p-4 shadow-sm border-0 bg-success text-white">
                <h5 className="fw-bold mb-4">Contact Information</h5>

                <p className="mb-3 d-flex align-items-start">
                <FaMapMarkerAlt className="me-2 mt-1" />
                <span><strong>Address:</strong> 123 Qetra Avenue, Lagos, Nigeria</span>
                </p>

                <p className="mb-3 d-flex align-items-start">
                <FaPhoneAlt className="me-2 mt-1" />
                <span><strong>Phone:</strong> +234 800 000 0000</span>
                </p>

                <p className="mb-3 d-flex align-items-start">
                <FaEnvelope className="me-2 mt-1" />
                <span><strong>Email:</strong> support@qetrabank.com</span>
                </p>

                <hr className="my-4 text-white" />

                <p className="mb-0 d-flex align-items-start">
                <FaRegClock className="me-2 mt-1" />
                <span>Available Mon – Fri from 9am to 5pm WAT</span>
                </p>
            </Card>
            </Col>

          </Row>
        </Container>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <h4 className="fw-bold text-success mb-4 text-center">Our Location</h4>
              <div
                className="rounded shadow-sm overflow-hidden"
                style={{ height: "400px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.844422644351!2d3.379205074617206!3d9.057508390995207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bcd8c17f6e4b1%3A0xf2548f0d9eb10fd!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1712068498259!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Qetra Location"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Landingcontact;
