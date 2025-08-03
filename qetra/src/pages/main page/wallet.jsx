import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Badge,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";
import {
  FaMoneyBillWave,
  FaExchangeAlt,
  FaEye,
  FaEyeSlash,
  FaCopy,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../../components/section/sidebar";
import DashboardNav from "../../components/section/dashboardnav";

const Wallet = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [copied, setCopied] = useState(false);

  const walletBalance = 500000;
  const accountNumber = "1234567890";

  const transactions = [
    { date: "July 28, 2025", description: "Airtime Purchase", amount: "-₦1,000", type: "Debit" },
    { date: "July 27, 2025", description: "Wallet Funded", amount: "+₦20,000", type: "Credit" },
    { date: "July 25, 2025", description: "Transfer to John", amount: "-₦5,000", type: "Debit" },
  ];

  // Persist balance visibility
  useEffect(() => {
    const stored = localStorage.getItem("showBalance");
    if (stored !== null) {
      setShowBalance(stored === "true");
    }
  }, []);

  const toggleBalance = () => {
    const newState = !showBalance;
    setShowBalance(newState);
    localStorage.setItem("showBalance", newState);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-light min-vh-100">
      <DashboardNav />

      <Container fluid className="pt-5 mt-5 px-3 px-md-5">
        <Row>
          <Col xs={12} md={3} className="mb-4">
            <Sidebar />
          </Col>

          <Col xs={12} md={9}>
            <h2 className="fw-bold text-success mb-4 text-center text-md-start">
              My Wallet
            </h2>

            {/* Wallet Summary */}
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <div>
                    <h6 className="text-muted mb-1">Wallet Balance</h6>
                    <div className="d-flex align-items-center gap-2">
                      <h2 className="fw-bold text-success mb-0">
                        {showBalance ? `₦${walletBalance.toLocaleString()}` : "•••••••"}
                      </h2>
                      <Button
                        variant="link"
                        className="p-0 text-success"
                        onClick={toggleBalance}
                        title={showBalance ? "Hide balance" : "Show balance"}
                      >
                        {showBalance ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </div>
                  </div>

                  <div className="d-flex flex-column flex-sm-row gap-3 mt-3 mt-md-0">
                    <Link
                      to="/dashboard/fund-wallet"
                      className="btn btn-success d-flex align-items-center gap-2"
                    >
                      <FaMoneyBillWave /> Fund Wallet
                    </Link>
                    <Link
                      to="/dashboard/transfer"
                      className="btn btn-outline-success d-flex align-items-center gap-2"
                    >
                      <FaExchangeAlt /> Transfer Money
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Account Number Display */}
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
                <div>
                  <h6 className="text-muted mb-1">Account Number</h6>
                  <h5 className="fw-semibold mb-0">{accountNumber}</h5>
                </div>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>{copied ? "Copied!" : "Copy"}</Tooltip>}
                >
                  <Button
                    
                    size="sm"
                    className="btn btn-success mt-3 mt-sm-0"
                    onClick={handleCopy}
                  >
                    <FaCopy className="me-2" />
                    {copied ? "Copied" : ""}
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>

            {/* Transaction History */}
            <h5 className="fw-bold text-success mb-3 text-center text-md-start">
              Wallet Transactions
            </h5>

            <Card className="shadow-sm border-0">
              <Card.Body className="p-0">
                {transactions.length > 0 ? (
                  <Table responsive hover className="mb-0 align-middle text-center">
                    <thead className="bg-success text-white">
                      <tr>
                        <th className="py-3">Date</th>
                        <th className="py-3">Description</th>
                        <th className="py-3">Amount</th>
                        <th className="py-3">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((txn, index) => {
                        const isCredit = txn.type === "Credit";
                        return (
                          <tr key={index} style={{ backgroundColor: isCredit ? "#e6f4ea" : "#fdeaea" }}>
                            <td className="py-3">{txn.date}</td>
                            <td className="py-3">{txn.description}</td>
                            <td className="py-3 fw-bold">{txn.amount}</td>
                            <td className="py-3">
                              <Badge bg={isCredit ? "success" : "danger"}>{txn.type}</Badge>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  <div className="p-4 text-center text-muted">
                    <p>No transactions available yet.</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Wallet;
