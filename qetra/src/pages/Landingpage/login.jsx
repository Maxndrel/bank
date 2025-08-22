import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /** ----------------------------
   * Form Validation
   ----------------------------- */
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

  /** ----------------------------
   * Input Change Handler
   ----------------------------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setLoginError("");
  };

  /** ----------------------------
   * Form Submit Handler
   ----------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    // Simulated authentication
    setTimeout(() => {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

      if (
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        // Save auth state (token simulation)
        localStorage.setItem("auth", JSON.stringify({ loggedIn: true }));
        navigate("/dashboard");
      } else {
        setLoginError("Invalid email or password.");
      }

      setLoading(false);
    }, 800); // simulate API delay
  };

  return (
    <main>
      <section>
        <Container fluid>
          <Row className="min-vh-100">
            {/* Left Banner */}
            <Col
              md={6}
              className="d-none d-md-flex flex-column justify-content-center align-items-center text-white p-5 register-left"
            >
              <h1 className="fw-bold display-5">Welcome Back to Qetra</h1>
              <p className="mt-3 fs-5 text-light text-center">
                Securely manage your finances, track investments, and grow with
                us.
              </p>
            </Col>

            {/* Right Form Section */}
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center p-5"
            >
              <Card
                className="shadow-sm border-0 p-4 w-100"
                style={{ maxWidth: "400px" }}
              >
                <h3 className="mb-4 text-center text-success fw-bold">
                  Login to Qetra
                </h3>

                {/* Error Alert */}
                {loginError && (
                  <Alert
                    variant="danger"
                    className="text-center"
                    dismissible
                    onClose={() => setLoginError("")}
                  >
                    {loginError}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} noValidate>
                  {/* Email */}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
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
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        aria-required="true"
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex={-1}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? <EyeSlashFill /> : <EyeFill />}
                      </Button>
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  {/* Options */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Form.Check type="checkbox" label="Remember me" id="rememberMe" />
                    <Link to="/forgot-password" className="text-success small">
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="success"
                    type="submit"
                    className="w-100 fw-bold"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </Form>

                {/* Footer */}
                <div className="text-center mt-4">
                  <span className="text-muted">Don&apos;t have an account?</span>{" "}
                  <Link to="/register" className="text-success fw-semibold">
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
