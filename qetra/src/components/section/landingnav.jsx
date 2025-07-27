import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Qetralogo from "../../assets/qetra-logo.png";
import './landingnav.css';

const Landingnav = () => {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center text-success">
          <img
            src={Qetralogo}
            width="40"
            height="30"
            className="d-inline-block align-top me-2"
            alt="logo"
          />
         QETRA
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="ms-3 fw-medium">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Landingabout" className="ms-3 fw-medium">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/Landinginvestment" className="ms-3 fw-medium">
              Investment
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="ms-3 fw-medium">
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Right Side Button */}
          <Nav>
            <button className="btn btn-success fw-bold">Get Started</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Landingnav;
