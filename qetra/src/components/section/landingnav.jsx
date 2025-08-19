import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from "react-router-dom";
import Qetralogo from "../../assets/qetra-logo.png";
import './landingnav.css';

const Landingnav = () => {
  return (
<Navbar expand="lg" className="bg-white shadow-sm py-3 px-4" fixed="top">
      <Container fluid>
        {/* Logo & Brand */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-success fw-bold">
          <img 
            src={Qetralogo} 
            alt="Qetra Logo" 
            width="30" 
            height="25" 
          />
          <div className="d-flex flex-column lh-sm">
            <span style={{ fontSize: "1rem" }}>QETRA</span>
            <span className='ms-2' style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>BANK</span>
          </div>
        </Navbar.Brand>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `ms-3 fw-medium nav-link-custom ${isActive ? 'active-link' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Landingabout"
              className={({ isActive }) => 
                `ms-3 fw-medium nav-link-custom ${isActive ? 'active-link' : ''}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/Landinginvestment"
              className={({ isActive }) => 
                `ms-3 fw-medium nav-link-custom ${isActive ? 'active-link' : ''}`
              }
            >
              Investment
            </NavLink>
            <NavLink
              to="/Landingcontact"
              className={({ isActive }) => 
                `ms-3 fw-medium nav-link-custom ${isActive ? 'active-link' : ''}`
              }
            >
              Contact Us
            </NavLink>
          </Nav>

          {/* CTA Button */}
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
