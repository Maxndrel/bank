import React from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { FaMoneyBillWave, FaDownload } from "react-icons/fa";
import Sidebar from "../../components/section/sidebar";
import DashboardNav from "../../components/section/dashboardnav";

const Wallet = () => {
  const transactions = [
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
            <h2 className="fw-bold text-success mb-4 text-center text-md-start">
              My Wallet
            </h2>

            {/* Wallet Summary */}
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <div className="mb-3 mb-md-0">
                    <h5 className="fw-semibold mb-1">Wallet Balance</h5>
                    <h3 className="fw-bold text-success">₦500,000</h3>
                  </div>
                  <div className="d-flex gap-3 flex-column flex-sm-row">
                    <Button variant="success" className="d-flex align-items-center gap-2">
                      <FaMoneyBillWave /> Fund Wallet
                    </Button>
                    <Button variant="outline-success" className="d-flex align-items-center gap-2">
                      <FaDownload /> Withdraw
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Transaction History */}
            <h4 className="fw-bold text-success mb-3 text-center text-md-start">
              Wallet Transactions
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
                    {transactions.map((txn, index) => {
                      const bgColor =
                        txn.type === "Debit"
                          ? "rgba(220, 53, 69, 0.10)"
                          : "rgba(25, 135, 84, 0.10)";

                      return (
                        <tr key={index} className="fw-semibold">
                          <td className="py-3" style={{ backgroundColor: bgColor }}>{txn.date}</td>
                          <td className="py-3" style={{ backgroundColor: bgColor }}>{txn.description}</td>
                          <td className="py-3" style={{ backgroundColor: bgColor }}>{txn.amount}</td>
                          <td className="py-3" style={{ backgroundColor: bgColor }}>{txn.type}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Wallet;
