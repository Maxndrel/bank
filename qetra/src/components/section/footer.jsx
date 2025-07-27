import React from 'react'
import { Facebook, Twitter, Linkedin } from "react-bootstrap-icons";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const footer = () => {
  return (
    <div>
       {/* Footer */}
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
    </div>
  )
}

export default footer
