import React, { useState, useRef, useEffect } from "react";
import { Navbar, Container, Nav, Dropdown, Card } from "react-bootstrap";
import { FaBell, FaUserCircle } from "react-icons/fa";
import Qetralogo from "../../assets/qetra-logo.png";

const DashboardNav = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const bellRef = useRef(null);
  const panelRef = useRef(null);

  // Close panel on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        !bellRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, message: "New login detected", time: "2m ago" },
    { id: 2, message: "You sent ₦10,000 to Mercy", time: "10m ago" },
    { id: 3, message: "Weekly summary available", time: "1h ago" },
  ];

  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-3 px-4 border-bottom" fixed="top">
      <Container fluid>
        {/* Logo and Brand Name inline */}
        <Navbar.Brand href="/" className="d-flex align-items-center text-success fw-bold">
          <img src={Qetralogo} alt="Qetra Logo" width="30" height="25" className="me-2" />
          <div className="d-flex flex-column lh-sm">
            <span style={{ fontSize: "1rem" }}>QETRA</span>
            <span className="ms-2" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>BANK</span>
          </div>
        </Navbar.Brand>

        {/* Notification and User section */}
        <div className="d-flex align-items-center ms-auto position-relative">
          {/* Notification Bell */}
          <Nav.Link
            href="#"
            className="position-relative text-dark me-3 p-0"
            onClick={(e) => {
              e.preventDefault();
              setShowNotifications(!showNotifications);
            }}
            ref={bellRef}
          >
            <FaBell size={18} />
            <span
              className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
              style={{ fontSize: "0.6rem" }}
            ></span>
          </Nav.Link>

          {/* Notification Panel */}
          {showNotifications && (
            <Card
              ref={panelRef}
              className="position-absolute"
              style={{
                top: "100%",
                right: "50px",
                width: "280px",
                zIndex: 1000,
              }}
            >
              <Card.Header className="bg-success text-white py-2 px-3">
                Notifications
              </Card.Header>
              <Card.Body className="p-2">
                {notifications.length > 0 ? (
                  notifications.map((note) => (
                    <div key={note.id} className="border-bottom py-2 px-2">
                      <div className="fw-medium">{note.message}</div>
                      <small className="text-muted">{note.time}</small>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-muted">No notifications</div>
                )}
              </Card.Body>
            </Card>
          )}

          {/* User Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-user"
              className="d-flex align-items-center border-0 p-0"
            >
              <FaUserCircle className="text-success" size={20} />
              <span className="fw-semibold text-dark ms-2 d-none d-sm-inline" style={{ fontSize: "0.9rem" }}>
                Emmanuel
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default DashboardNav;
