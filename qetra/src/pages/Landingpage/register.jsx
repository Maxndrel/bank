import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../../src/index.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false); // Track success screen
  const navigate = useNavigate();

  // Redirect after success
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: newValue });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm your password.";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match.";

    if (!formData.terms) newErrors.terms = "You must accept the terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("qetraUser", JSON.stringify(formData));
      setIsSuccess(true); // Show success screen
    }
  };

  localStorage.setItem("email", formData.email);
localStorage.setItem("password", formData.password);
localStorage.setItem("fullname", formData.fullName);

  // If success, show success screen
  if (isSuccess) {
    return (
      <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light register-left">
        <Card className="shadow-sm border-0 p-5 text-center">
          <h2 className="text-success fw-bold">Welcome, {formData.fullName} 🎉</h2>
          <p className="mt-2">Registration was successful.</p>
          <div className="mt-4">
            <Spinner animation="border" variant="success" />
            <p className="mt-3">Redirecting to your dashboard...</p>
          </div>
        </Card>
      </Container>
    );
  }

  return (
    <main>
      <Container fluid className="vh-100">
        <Row className="h-100">
          {/* LEFT SIDE - Gradient Background + Text/Illustration */}
          <Col
            md={6}
            className="d-none d-md-flex align-items-center justify-content-center register-left"
          >
            <div className="text-center text-white px-5">
              <h1 className="fw-bold">Welcome to Qetra Bank</h1>
              <p className="mt-3 lead">
                Secure banking, smart investments, and financial freedom — all
                in one place. Join us today and take control of your money.
              </p>
              <img
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-bank-banking-flaticons-lineal-color-flat-icons.png"
                alt="Bank Illustration"
                width="180"
                className="mt-4"
              />
            </div>
          </Col>

          {/* RIGHT SIDE - Signup Form */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center bg-light"
          >
            <Card className="shadow-sm border-0 p-4 w-75">
              <h3 className="mb-4 text-center text-success fw-bold">
                Create Your Qetra Account
              </h3>
              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="formFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    isInvalid={!!errors.fullName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
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

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTerms">
                  <Form.Check
                    type="checkbox"
                    name="terms"
                    label="I agree to the terms and conditions"
                    checked={formData.terms}
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                  />
                </Form.Group>

                <Button
                  variant="success"
                  type="submit"
                  className="w-100 fw-bold"
                >
                  Register
                </Button>
              </Form>

              <div className="text-center mt-4">
                <span className="text-muted">Already have an account?</span>{" "}
                <a href="/login" className="text-success fw-semibold">
                  Login
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Register;
