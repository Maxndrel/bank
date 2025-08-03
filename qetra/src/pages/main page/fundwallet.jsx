import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button, Alert } from "react-bootstrap";
import { FaMoneyBillWave, FaCreditCard, FaUniversity, FaMobileAlt } from "react-icons/fa";
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
                      <Form.Check
                        type="radio"
                        label={<><FaUniversity /> Bank Transfer</>}
                        name="method"
                        value="bank"
                        checked={method === "bank"}
                        onChange={(e) => setMethod(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label={<><FaCreditCard /> Debit Card</>}
                        name="method"
                        value="card"
                        checked={method === "card"}
                        onChange={(e) => setMethod(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label={<><FaMobileAlt /> USSD</>}
                        name="method"
                        value="ussd"
                        checked={method === "ussd"}
                        onChange={(e) => setMethod(e.target.value)}
                      />
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
