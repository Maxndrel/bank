import React from "react";
import { Navbar, Container, Nav, Dropdown, Image } from "react-bootstrap";
import { FaBell, FaUserCircle } from "react-icons/fa";
import Qetralogo from "../../assets/qetra-logo.png";

const DashboardNav = () => {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-3 border-bottom" fixed="top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/" className="fw-bold d-flex align-items-center text-success">
          <img
            src={Qetralogo}
            alt="Qetra Logo"
            width="30"
            height="25"
            className="me-2"
          />
          QETRA
        </Navbar.Brand>

        {/* Right side */}
        <Nav className="ms-auto align-items-center">
          {/* Notification Bell */}
          <Nav.Link href="#" className="position-relative me-3 text-dark">
            <FaBell size={18} />
            <span
              className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
              style={{ fontSize: "0.6rem" }}
            ></span>
          </Nav.Link>

          {/* User Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-user"
              className="d-flex align-items-center border-0"
            >
              <FaUserCircle className="me-2 text-success" size={20} />
              <span className="fw-semibold text-dark">Emmanuel</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DashboardNav;
