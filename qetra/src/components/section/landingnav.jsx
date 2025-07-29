import Container from 'react-bootstrap/Container';
import { NavLink, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Qetralogo from "../../assets/qetra-logo.png";
import './landingnav.css';

const Landingnav = () => {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center text-success">
          <img
            src={Qetralogo}
            width="38"
            height="30"
            className="d-inline-block align-top me-2"
            alt="logo"
          />
          QETRA
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <NavLink
              to="/"
              className={({ isActive }) => `ms-3 fw-medium nav-link-custom ${isActive ? 'active-link' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/Landingabout"
              className={({ isActive }) => `ms-3 fw-medium nav-link-custom ${isActive ? 'active-link' : ''}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/Landinginvestment"
              className={({ isActive }) => `ms-3 fw-medium nav-link-custom ${isActive ? 'active-link' : ''}`}
            >
              Investment
            </NavLink>
            <NavLink
              to="/Landingcontact"
              className={({ isActive }) => `ms-3 fw-medium nav-link-custom ${isActive ? 'active-link' : ''}`}
            >
              Contact Us
            </NavLink>
          </Nav>

          <Nav>
            <Link to="/login" className="btn btn-success fw-bold">
              Get Started
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Landingnav;
