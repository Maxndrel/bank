import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {
  FaArrowLeft,
  FaPaperPlane,
  FaUniversity,
  FaGlobeAfrica,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TransferMoney = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [bankOption, setBankOption] = useState("same");
  const [bankName, setBankName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleTransfer = (e) => {
    e.preventDefault();
    // Transfer logic here
    setSubmitted(true);
    setRecipient("");
    setAmount("");
    setDescription("");
    setBankName("");
    setReceiverName("");
  };

  const renderTooltip = (msg) => (
    <Tooltip id={`tooltip-${msg}`}>{msg}</Tooltip>
  );

  return (
    <main className="bg-light min-vh-100 pt-5 mt-5">
      <Container className="px-3 px-md-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="mb-4 d-flex align-items-center gap-2">
              <Link to="/dashboard" className="btn btn-outline-success btn-sm">
                <FaArrowLeft /> Back
              </Link>
              <h3 className="fw-bold text-success m-0">Transfer Money</h3>
            </div>

            <Card className="shadow-sm border-0">
              <Card.Body>
                {submitted && (
                  <Alert
                    variant="success"
                    onClose={() => setSubmitted(false)}
                    dismissible
                  >
                    Transfer initiated successfully!
                  </Alert>
                )}

                <Form onSubmit={handleTransfer}>
                  {/* Transfer Type Styled as Tabs */}
                  <Form.Group className="mb-4">
                    <Form.Label>Transfer Type</Form.Label>
                    <div className="d-flex gap-3">
                      <OverlayTrigger
                        placement="top"
                        overlay={renderTooltip("Transfer to a Qetra Bank user")}
                      >
                        <Card
                          className={`flex-fill text-center p-3 shadow-sm border ${
                            bankOption === "same"
                              ? "border-success"
                              : "border-light"
                          }`}
                          role="button"
                          onClick={() => setBankOption("same")}
                        >
                          <FaUniversity className="text-success fs-3 mb-1" />
                          <h6 className="m-0 fw-bold text-success">Same Bank</h6>
                        </Card>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="top"
                        overlay={renderTooltip("Transfer to another bank")}
                      >
                        <Card
                          className={`flex-fill text-center p-3 shadow-sm border ${
                            bankOption === "other"
                              ? "border-success"
                              : "border-light"
                          }`}
                          role="button"
                          onClick={() => setBankOption("other")}
                        >
                          <FaGlobeAfrica className="text-success fs-3 mb-1" />
                          <h6 className="m-0 fw-bold text-success">Other Bank</h6>
                        </Card>
                      </OverlayTrigger>
                    </div>
                  </Form.Group>

                  {bankOption === "other" && (
                    <>
                      <Form.Group className="mb-3" controlId="bankName">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter recipient's bank name"
                          value={bankName}
                          onChange={(e) => setBankName(e.target.value)}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="receiverName">
                        <Form.Label>Receiver Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter full name of recipient"
                          value={receiverName}
                          onChange={(e) => setReceiverName(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </>
                  )}

                  <Form.Group className="mb-3" controlId="recipientAccount">
                    <Form.Label>Recipient Account Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter account number"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="amount">
                    <Form.Label>Amount (₦)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="description">
                    <Form.Label>Description (optional)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Add a short note"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="success"
                    className="w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                  >
                    <FaPaperPlane /> Transfer Now
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

export default TransferMoney;
