import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../../src/index.css";

const WelcomeBack = () => {
  const navigate = useNavigate();
  const fullName = localStorage.getItem("fullname") || "User";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="vh-100 d-flex align-items-center bg-light">
      <Container>
        <Row className="justify-content-center register-left">
          <Col md={6} lg={5}>
            <Card className="shadow-sm border-0 p-5 text-center">
              <h2 className="text-success fw-bold">
                Welcome back, {fullName} 🎉
              </h2>
              <p className="mt-3 text-muted">Login successful</p>
              <Button
                variant="success"
                className="mt-4 fw-bold"
                onClick={() => navigate("/dashboard")}
              >
                Go to Dashboard
              </Button>
              <p className="small mt-3 text-muted">
                Redirecting in 3 seconds...
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeBack;
