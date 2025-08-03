import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Tabs,
  Tab,
  Image,
  ListGroup,
} from "react-bootstrap";
import DashboardNav from "../../components/section/dashboardnav";
import Sidebar from "../../components/section/sidebar";
import defaultAvatar from "../../assets/team1.png"; // Replace with your actual placeholder avatar

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profilePic, setProfilePic] = useState(null);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setProfilePic(imgUrl);
    }
  };

  const handle2FAToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
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
              Settings
            </h2>

            <Card className="shadow-sm border-0">
              <Card.Body>
                <Tabs
                  activeKey={activeTab}
                  onSelect={(k) => setActiveTab(k)}
                  className="mb-3"
                >
                  {/* Profile Tab */}
                  <Tab eventKey="profile" title="Profile">
                    <Form>
                      <Row className="mb-4">
                        <Col md={3} className="text-center">
                          <Image
                            src={profilePic || defaultAvatar}
                            roundedCircle
                            width={100}
                            height={50}
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
                                <Form.Control type="text" defaultValue="Emmanuel" />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" defaultValue="Omajuwa" />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" defaultValue="emmanuel@example.com" />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" defaultValue="+2348123456789" />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Button variant="success">Save Changes</Button>
                    </Form>
                  </Tab>

                  {/* Preferences Tab */}
                  <Tab eventKey="account" title="Account Preferences">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Preferred Language</Form.Label>
                        <Form.Select defaultValue="English">
                          <option>English</option>
                          <option>Hausa</option>
                          <option>Yoruba</option>
                          <option>Igbo</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Check type="switch" label="Enable Dark Mode" />
                      </Form.Group>

                      <Button variant="success">Update Preferences</Button>
                    </Form>
                  </Tab>

                  {/* Password Tab */}
                  <Tab eventKey="password" title="Change Password">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>

                      <Button variant="success">Change Password</Button>
                    </Form>
                  </Tab>

                  {/* Notifications Tab */}
                  <Tab eventKey="notifications" title="Notifications">
                    <Form>
                      <Form.Check
                        type="checkbox"
                        label="Receive Email Notifications"
                        defaultChecked
                        className="mb-3"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Receive SMS Alerts"
                        className="mb-3"
                      />

                      <Button variant="success">Save Notification Settings</Button>
                    </Form>
                  </Tab>

                  {/* Security Tab */}
                  <Tab eventKey="security" title="Security">
                    <Form className="mb-4">
                      <Form.Check
                        type="switch"
                        id="2fa-toggle"
                        label="Enable Two-Factor Authentication (2FA)"
                        checked={twoFactorEnabled}
                        onChange={handle2FAToggle}
                      />
                    </Form>

                    <h6 className="fw-bold mb-3">Connected Devices</h6>
                    <ListGroup>
                      <ListGroup.Item className="d-flex justify-content-between">
                        <div>
                          <strong>Chrome</strong> - Lagos, Nigeria
                        </div>
                        <Button size="sm" variant="outline-danger">
                          Remove
                        </Button>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between">
                        <div>
                          <strong>Firefox</strong> - Abuja, Nigeria
                        </div>
                        <Button size="sm" variant="outline-danger">
                          Remove
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>

                    <div className="mt-4">
                      <h6 className="text-danger">Danger Zone</h6>
                      <Button variant="danger">Delete My Account</Button>
                    </div>
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
