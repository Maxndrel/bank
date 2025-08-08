import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Tab,
  Tabs,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import DashboardNav from "../../components/section/dashboardnav";
import Sidebar from "../../components/section/sidebar";
import defaultAvatar from "../../assets/team1.png";

const Settings = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [smsNotifs, setSmsNotifs] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Account deletion initiated.");
    }
  };

  return (
    <main className="bg-light min-vh-100">
      <DashboardNav />

      <Container fluid className="pt-5 mt-5 px-3 px-md-5">
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>

          <Col md={9}>
            <h2 className="fw-bold text-success mb-4 text-center text-md-start">
              Account Settings
            </h2>

            <Card className="shadow-sm border-0">
              <Card.Body>
                <Tabs defaultActiveKey="profile" id="settings-tabs" className="mb-3">
                  {/* ===== Profile Tab ===== */}
                  <Tab eventKey="profile" title="Profile">
                    <Form>
                      <Row className="mb-4">
                        <Col md={3} className="text-center">
                          <Image
                            src={profilePic || defaultAvatar}
                            roundedCircle
                            width={100}
                            height={100}
                          />
                          <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-2"
                          />
                        </Col>

                        <Col md={9}>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value="Emmanuel" disabled />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value="Omajuwa" disabled />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control type="text" value="John" disabled />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" value="1998-01-01" disabled />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value="emmanuel@example.com" disabled />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" value="+2348123456789" disabled />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control type="text" value="Male" disabled />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Nationality</Form.Label>
                                <Form.Control type="text" value="Nigerian" disabled />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3">
                            <Form.Label>Residential Address</Form.Label>
                            <Form.Control type="text" value="123 Main Street, Lagos" disabled />
                          </Form.Group>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>State of Origin</Form.Label>
                                <Form.Control type="text" value="Delta" disabled />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>State of Residence</Form.Label>
                                <Form.Control type="text" value="Lagos" disabled />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Next of Kin Name</Form.Label>
                                <Form.Control type="text" value="Jane Omajuwa" disabled />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Next of Kin Phone</Form.Label>
                                <Form.Control type="text" value="+2348123456780" disabled />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Relationship to Next of Kin</Form.Label>
                                <Form.Control type="text" value="Sister" disabled />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>BVN / National ID</Form.Label>
                                <Form.Control type="text" value="22145678901" disabled />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Occupation</Form.Label>
                                <Form.Control type="text" value="Software Developer" disabled />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Source of Income</Form.Label>
                                <Form.Control type="text" value="Salaried Employment" disabled />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3">
                            <Form.Label>Uploaded Valid ID</Form.Label>
                            <Form.Control type="text" value="emmanuel-id.pdf" disabled />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Tab>

                  {/* ===== Security Tab ===== */}
                  <Tab eventKey="security" title="Security">
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Change Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter new password" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Change PIN</Form.Label>
                            <Form.Control type="password" placeholder="Enter new 4-digit PIN" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Check
                          type="switch"
                          label="Enable Two-Factor Authentication (2FA)"
                          checked={twoFactorEnabled}
                          onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Connected Devices</Form.Label>
                        <ul className="ps-3">
                          <li>Chrome on Windows 10 (Last seen: Today)</li>
                          <li>Safari on iPhone 13 (Last seen: Yesterday)</li>
                        </ul>
                      </Form.Group>

                      <Button variant="danger" onClick={handleDeleteAccount}>
                        Delete My Account
                      </Button>
                    </Form>
                  </Tab>

                  {/* ===== Preferences Tab ===== */}
                  <Tab eventKey="preferences" title="Preferences">
  <Form>
    <Row>
      <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Check
            type="switch"
            label="Dark Mode"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Check
            type="switch"
            label="Email Notifications"
            checked={emailNotifs}
            onChange={() => setEmailNotifs(!emailNotifs)}
          />
        </Form.Group>
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Check
            type="switch"
            label="SMS Notifications"
            checked={smsNotifs}
            onChange={() => setSmsNotifs(!smsNotifs)}
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Check
            type="switch"
            label="Transaction Alerts (above ₦100,000)"
            defaultChecked
          />
        </Form.Group>
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Label>Language</Form.Label>
          <Form.Select defaultValue="English">
            <option>English</option>
            <option>French</option>
            <option>Yoruba</option>
            <option>Hausa</option>
            <option>Igbo</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Label>Preferred Currency Format</Form.Label>
          <Form.Select defaultValue="NGN">
            <option value="NGN">₦ - Nigerian Naira</option>
            <option value="USD">$ - US Dollar</option>
            <option value="EUR">€ - Euro</option>
            <option value="GBP">£ - British Pound</option>
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Label>Date Format</Form.Label>
          <Form.Select defaultValue="DD/MM/YYYY">
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </Form.Select>
        </Form.Group>
      </Col>

      <Col md={6}>
        <Form.Group className="mb-3">
          <Form.Label>Time Format</Form.Label>
          <Form.Select defaultValue="24h">
            <option value="24h">24-Hour</option>
            <option value="12h">12-Hour (AM/PM)</option>
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>
  </Form>
</Tab>

                </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Settings;
