import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaExchangeAlt,
  FaChartLine,
  FaCogs,
  FaSignOutAlt
} from "react-icons/fa";
import "./dashboardsidebar.css";

const DashboardSidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Sidebar - Large Screens */}
      <div className="sidebar bg-success text-white d-none d-lg-flex flex-column p-3 vh-100">
        <h4 className="fw-bold mb-4">Dashboard</h4>
        <Nav className="flex-column">
          <Nav.Link
            as={Link}
            to="/Dashboard"
            className={`text-white d-flex align-items-center mb-3 ${isActive("/dashboard/home") ? "active-link" : ""}`}
          >
            <FaHome className="me-2" />
            Home
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/Wallet"
            className={`text-white d-flex align-items-center mb-3 ${isActive("/dashboard/wallet") ? "active-link" : ""}`}
          >
            <FaWallet className="me-2" />
            Wallet
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/Transactions"
            className={`text-white d-flex align-items-center mb-3 ${isActive("/dashboard/transactions") ? "active-link" : ""}`}
          >
            <FaExchangeAlt className="me-2" />
            Transactions
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/Investment"
            className={`text-white d-flex align-items-center mb-3 ${isActive("/dashboard/investment") ? "active-link" : ""}`}
          >
            <FaChartLine className="me-2" />
            Investments
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/Settings"
            className={`text-white d-flex align-items-center mb-3 ${isActive("/dashboard/settings") ? "active-link" : ""}`}
          >
            <FaCogs className="me-2" />
            Settings
          </Nav.Link>

          <hr className="text-white" />

          <Nav.Link
            as={Link}
            to="/"
            className="text-white d-flex align-items-center"
          >
            <FaSignOutAlt className="me-2" />
            Logout
          </Nav.Link>
        </Nav>
      </div>

      {/* Bottom Navigation - Small Screens */}
      <div className="bottom-nav d-lg-none bg-success text-white fixed-bottom d-flex justify-content-around py-2 shadow">
        <Link to="/Dashboard" className={`text-white text-center ${isActive("/dashboard/home") ? "active-icon" : ""}`}>
          <FaHome size={20} />
          <div style={{ fontSize: "12px" }}>Home</div>
        </Link>

        <Link to="/Wallet" className={`text-white text-center ${isActive("/dashboard/wallet") ? "active-icon" : ""}`}>
          <FaWallet size={20} />
          <div style={{ fontSize: "12px" }}>Wallet</div>
        </Link>

        <Link to="/Transactions" className={`text-white text-center ${isActive("/dashboard/transactions") ? "active-icon" : ""}`}>
          <FaExchangeAlt size={20} />
          <div style={{ fontSize: "12px" }}>Transact</div>
        </Link>

        <Link to="/Investment" className={`text-white text-center ${isActive("/dashboard/investment") ? "active-icon" : ""}`}>
          <FaChartLine size={20} />
          <div style={{ fontSize: "12px" }}>Invest</div>
        </Link>

        <Link to="/Settings" className={`text-white text-center ${isActive("/dashboard/settings") ? "active-icon" : ""}`}>
          <FaCogs size={20} />
          <div style={{ fontSize: "12px" }}>Settings</div>
        </Link>
      </div>
    </>
  );
};

export default DashboardSidebar;
