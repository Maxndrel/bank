import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Alert,
} from "react-bootstrap";
import {
  FaUniversity,
  FaCreditCard,
  FaMobileAlt,
} from "react-icons/fa";
import Sidebar from "../../components/section/sidebar";
import DashboardNav from "../../components/section/dashboardnav";

const FundWallet = () => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("bank");
  const [success, setSuccess] = useState(false);

  const handleFund = (e) => {
    e.preventDefault();
    if (amount) {
      setSuccess(true);
      setAmount("");
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  const fundingOptions = [
    {
      value: "bank",
      label: "Bank Transfer",
      icon: <FaUniversity className="fs-3 text-success mb-2" />,
    },
    {
      value: "card",
      label: "Debit Card",
      icon: <FaCreditCard className="fs-3 text-success mb-2" />,
    },
    {
      value: "ussd",
      label: "USSD",
      icon: <FaMobileAlt className="fs-3 text-success mb-2" />,
    },
  ];

  return (
    <main className="bg-light min-vh-100">
      <DashboardNav />
      <Container fluid className="pt-5 mt-5 px-3 px-md-5">
        <Row>
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <Sidebar />
          </Col>

          <Col xs={12} md={9}>
            <h3 className="fw-bold text-success mb-4 text-center text-md-start">
              Fund Your Wallet
            </h3>

            <Card className="shadow-sm border-0">
              <Card.Body>
                {success && (
                  <Alert variant="success">Wallet funded successfully!</Alert>
                )}

                <Form onSubmit={handleFund}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">Funding Method</Form.Label>
                    <div className="d-flex gap-3 flex-wrap">
                      {fundingOptions.map((option) => (
                        <Card
                          key={option.value}
                          className={`flex-fill text-center p-3 shadow-sm border-2 ${
                            method === option.value
                              ? "border-success"
                              : "border-light"
                          }`}
                          role="button"
                          onClick={() => setMethod(option.value)}
                          style={{
                            cursor: "pointer",
                            minWidth: "150px",
                            transition: "all 0.2s ease-in-out",
                          }}
                        >
                          {option.icon}
                          <h6 className="fw-bold text-success">
                            {option.label}
                          </h6>
                        </Card>
                      ))}
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">Enter Amount (₦)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="e.g. 10000"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </Form.Group>

                  {["bank", "ussd"].includes(method) && (
                    <div className="mb-4">
                      <Form.Label className="fw-semibold">
                        Payment Information
                      </Form.Label>
                      <Card className="p-3 bg-light border">
                        <p className="mb-1 fw-bold">Account Name:</p>
                        <p>Qetra Bank Wallet</p>
                        <p className="mb-1 fw-bold">Account Number:</p>
                        <p>1234567890</p>
                        <p className="mb-1 fw-bold">Bank Name:</p>
                        <p>Qetra Bank</p>
                      </Card>
                    </div>
                  )}

                  {method === "card" && (
                    <div className="mb-4">
                      <Form.Label className="fw-semibold">Card Details</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Card Number"
                        className="mb-2"
                        required
                      />
                      <div className="d-flex gap-2">
                        <Form.Control
                          type="text"
                          placeholder="MM/YY"
                          className="mb-2"
                          required
                        />
                        <Form.Control
                          type="text"
                          placeholder="CVV"
                          className="mb-2"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="d-grid">
                    <Button variant="success" type="submit">
                      Fund Wallet
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            <div className="mt-5 text-center">
              <h5 className="text-muted">Current Wallet Balance</h5>
              <h3 className="fw-bold text-success">₦500,000</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default FundWallet;
