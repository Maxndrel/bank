import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/index.css";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

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
    setLoginError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");

      if (storedEmail === formData.email && storedPassword === formData.password) {
        navigate("/welcome-back");
      } else {
        setLoginError("Invalid email or password");
      }
    }
  };

  return (
    <main>
      <section>
        <Container fluid>
          <Row className="min-vh-100">
            
            {/* Left column with gradient + text/illustration */}
            <Col 
              md={6} 
              className="d-none d-md-flex flex-column justify-content-center align-items-center text-white p-5  register-left"
            >
              <h1 className="fw-bold display-5">Welcome Back to Qetra</h1>
              <p className="mt-3 fs-5 text-light text-center">
                Securely manage your finances, track investments, and grow with us.
              </p>
              {/* Optional illustration image */}
              <img 
                src="https://undraw.co/api/illustrations/secure_login.svg" 
                alt="Login illustration" 
                className="img-fluid mt-4"
                style={{ maxHeight: "250px" }}
              />
            </Col>

            {/* Right column with form */}
            <Col md={6} className="d-flex justify-content-center align-items-center p-5">
              <Card className="shadow-sm border-0 p-4 w-100" style={{ maxWidth: "400px" }}>
                <h3 className="mb-4 text-center text-success fw-bold">Login to Qetra</h3>

                {loginError && (
                  <Alert variant="danger" className="text-center">
                    {loginError}
                  </Alert>
                )}

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
                    <Form.Check type="checkbox" label="Remember me" id="rememberMe" />
                    <a href="#" className="text-success small">
                      Forgot password?
                    </a>
                  </div>

                  <Button variant="success" type="submit" className="w-100 fw-bold">
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
    </main>
  );
};

export default Login;
