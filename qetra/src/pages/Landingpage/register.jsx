import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Spinner,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /** ----------------------------
   * Redirect after success
   ----------------------------- */
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate]);

  /** ----------------------------
   * Input Change Handler
   ----------------------------- */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: newValue });
    setErrors({ ...errors, [name]: "" });
  };

  /** ----------------------------
   * Form Validation
   ----------------------------- */
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm your password.";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match.";

    if (!formData.terms)
      newErrors.terms = "You must accept the terms and conditions.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /** ----------------------------
   * Form Submit Handler
   ----------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    // Simulate registration process
    setTimeout(() => {
      // Save user in localStorage (simulate API save)
      const { fullName, email, password } = formData;
      localStorage.setItem("user", JSON.stringify({ fullName, email, password }));

      setIsSuccess(true);
      setLoading(false);
    }, 1000);
  };

  /** ----------------------------
   * Success Screen
   ----------------------------- */
  if (isSuccess) {
    return (
      <Container
        fluid
        className="vh-100 d-flex align-items-center justify-content-center bg-light register-left"
      >
        <Card className="shadow-sm border-0 p-5 text-center">
          <h2 className="text-success fw-bold">
            Welcome, {formData.fullName} 🎉
          </h2>
          <p className="mt-2">Registration was successful.</p>
          <div className="mt-4">
            <Spinner animation="border" variant="success" />
            <p className="mt-3">Redirecting to your dashboard...</p>
          </div>
        </Card>
      </Container>
    );
  }

  /** ----------------------------
   * Registration Form
   ----------------------------- */
  return (
    <main>
      <Container fluid className="vh-100">
        <Row className="h-100">
          {/* Left Banner */}
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

          {/* Right Form Section */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center bg-light"
          >
            <Card className="shadow-sm border-0 p-4 w-75">
              <h3 className="mb-4 text-center text-success fw-bold">
                Create Your Qetra Account
              </h3>

              <Form onSubmit={handleSubmit} noValidate>
                {/* Full Name */}
                <Form.Group className="mb-3" controlId="formFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    isInvalid={!!errors.fullName}
                    aria-required="true"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    aria-required="true"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    aria-required="true"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Confirm Password */}
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                    aria-required="true"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Terms */}
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

                {/* Submit */}
                <Button
                  variant="success"
                  type="submit"
                  className="w-100 fw-bold"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </Button>
              </Form>

              {/* Footer */}
              <div className="text-center mt-4">
                <span className="text-muted">Already have an account?</span>{" "}
                <Link to="/login" className="text-success fw-semibold">
                  Login
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Register;
