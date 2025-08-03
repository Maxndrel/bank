import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Landingnav from "../../components/section/landingnav";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/section/footer";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // 🚀 for redirecting after login

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate successful login
      alert("Login successful (demo)");
      navigate("/dashboard"); // ✅ redirect to dashboard
    }
  };

  return (
    <main>
      {/* Navigation */}
      <Landingnav />

      {/* Login Section */}
      <section className="mt-5 py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <Card className="shadow-sm border-0 p-4">
                <h3 className="mb-4 text-center text-success fw-bold">
                  Login to Qetra
                </h3>
                <Form onSubmit={handleSubmit} noValidate>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      id="rememberMe"
                    />
                    <a href="#" className="text-success small">
                      Forgot password?
                    </a>
                  </div>

                  <Button
                    variant="success"
                    type="submit"
                    className="w-100 fw-bold"
                  >
                    Login
                  </Button>
                </Form>

                <div className="text-center mt-4">
                  <span className="text-muted">Don't have an account?</span>{" "}
                  <Link to="/Register" className="text-success fw-semibold">
                    Register
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Login;
