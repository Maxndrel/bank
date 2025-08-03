import React from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import {
  FaWallet,
  FaExchangeAlt,
  FaChartLine,
  FaMoneyBillWave,
  FaPaperPlane,
  FaPiggyBank,
} from "react-icons/fa";
import Sidebar from "../../components/section/sidebar";
import DashboardNav from "../../components/section/dashboardnav";

const Dashboard = () => {
  const recentTransactions = [
    { date: "July 28, 2025", description: "Airtime Purchase", amount: "-₦1,000", type: "Debit" },
    { date: "July 27, 2025", description: "Wallet Funded", amount: "+₦20,000", type: "Credit" },
    { date: "July 25, 2025", description: "Transfer to John", amount: "-₦5,000", type: "Debit" },
  ];

  return (
    <main className="bg-light min-vh-100">
      <DashboardNav />

      <Container fluid className="pt-5 mt-5 px-3 px-md-5">
        <Row>
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <Sidebar />
          </Col>

          <Col xs={12} md={9}>
            <div>
              <h2 className="fw-bold text-success mb-4 text-center text-md-start">
                Welcome back, Emmanuel 👋
              </h2>

              {/* Summary Cards */}
              <Row className="g-4">
                <Col xs={12} sm={6} lg={4}>
                  <Card className="shadow-sm border-0 h-100">
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <FaWallet className="me-3 text-success fs-3" />
                        <div>
                          <Card.Title className="mb-0">Total Balance</Card.Title>
                          <h5 className="fw-bold">₦500,000</h5>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={12} sm={6} lg={4}>
                  <Card className="shadow-sm border-0 h-100">
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <FaExchangeAlt className="me-3 text-success fs-3" />
                        <div>
                          <Card.Title className="mb-0">Last Transaction</Card.Title>
                          <h6 className="fw-bold">₦15,000 - Debit</h6>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={12} sm={6} lg={4}>
                  <Card className="shadow-sm border-0 h-100">
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <FaChartLine className="me-3 text-success fs-3" />
                        <div>
                          <Card.Title className="mb-0">Investment</Card.Title>
                          <h6 className="fw-bold">₦300,000 Active</h6>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Quick Actions */}
              <div className="mt-5">
                <h4 className="fw-bold text-success mb-3 text-center text-md-start">
                  Quick Actions
                </h4>
                <Row className="g-3">
                  <Col xs={12} sm={6} md={4}>
                    <Button
                      variant="outline-success"
                      className="w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                    >
                      <FaMoneyBillWave /> Fund Wallet
                    </Button>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                    <Button
                      variant="outline-success"
                      className="w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                    >
                      <FaPaperPlane /> Transfer Money
                    </Button>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                    <Button
                      variant="outline-success"
                      className="w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                    >
                      <FaPiggyBank /> Invest Now
                    </Button>
                  </Col>
                </Row>
              </div>

              {/* Recent Transactions */}
              <div className="mt-5">
                <h4 className="fw-bold text-success mb-3 text-center text-md-start">
                  Recent Transactions
                </h4>
                <Card className="shadow-sm border-0">
                  <Card.Body className="p-0">
                    <Table responsive borderless hover className="mb-0 align-middle">
                      <thead className="bg-success text-white text-center">
                        <tr>
                          <th className="py-3">Date</th>
                          <th className="py-3">Description</th>
                          <th className="py-3">Amount</th>
                          <th className="py-3">Type</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {recentTransactions.map((txn, index) => {
                          const bgColor =
                            txn.type === "Debit"
                              ? "rgba(220, 53, 69, 0.2)"   // red for debit
                              : "rgba(25, 135, 84, 0.2)";  // green for credit

                          return (
                            <tr key={index} style={{ backgroundColor: bgColor }}>
                              <td className="py-3 fw-semibold">{txn.date}</td>
                              <td className="py-3 fw-semibold">{txn.description}</td>
                              <td className="py-3 fw-semibold">{txn.amount}</td>
                              <td className="py-3 fw-semibold">{txn.type}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Dashboard;
