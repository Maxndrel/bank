import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { FaArrowLeft, FaPiggyBank } from "react-icons/fa";
import { Link } from "react-router-dom";

const InvestNow = () => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Fixed Deposit");
  const [duration, setDuration] = useState("3 Months");
  const [submitted, setSubmitted] = useState(false);

  const handleInvest = (e) => {
    e.preventDefault();
    // Investment logic here
    setSubmitted(true);
    setAmount("");
    setType("Fixed Deposit");
    setDuration("3 Months");
  };

  return (
    <main className="bg-light min-vh-100 pt-5 mt-5">
      <Container className="px-3 px-md-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="mb-4 d-flex align-items-center gap-2">
              <Link to="/dashboard" className="btn btn-outline-success btn-sm">
                <FaArrowLeft /> Back
              </Link>
              <h3 className="fw-bold text-success m-0">Invest Now</h3>
            </div>

            <Card className="shadow-sm border-0">
              <Card.Body>
                {submitted && (
                  <Alert variant="success" dismissible onClose={() => setSubmitted(false)}>
                    Your investment has been submitted successfully!
                  </Alert>
                )}

                <Form onSubmit={handleInvest}>
                  <Form.Group className="mb-3" controlId="investmentAmount">
                    <Form.Label>Amount to Invest (₦)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="investmentType">
                    <Form.Label>Investment Type</Form.Label>
                    <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
                      <option>Fixed Deposit</option>
                      <option>Mutual Funds</option>
                      <option>Stocks</option>
                      <option>Bonds</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="investmentDuration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Select value={duration} onChange={(e) => setDuration(e.target.value)}>
                      <option>3 Months</option>
                      <option>6 Months</option>
                      <option>12 Months</option>
                      <option>24 Months</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Optional Summary */}
                  <div className="mb-3 text-muted small">
                    <strong>Estimated Return:</strong> ~₦{(amount * 1.1).toLocaleString()}
                  </div>

                  <Button
                    variant="success"
                    type="submit"
                    className="w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                  >
                    <FaPiggyBank /> Start Investment
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default InvestNow;
