import React from "react";
import { Container, Row, Col, Card, Table, Form } from "react-bootstrap";
import DashboardNav from "../../components/section/dashboardnav";
import Sidebar from "../../components/section/sidebar";

const Transaction = () => {
  const transactions = [
    { date: "July 28, 2025", description: "Utility Payment", amount: "-₦10,000", type: "Debit" },
    { date: "July 27, 2025", description: "Salary Credit", amount: "+₦150,000", type: "Credit" },
    { date: "July 25, 2025", description: "Data Subscription", amount: "-₦2,000", type: "Debit" },
    { date: "July 24, 2025", description: "Wallet Fund", amount: "+₦50,000", type: "Credit" },
  ];

  return (
    <main className="bg-light min-vh-100">
      <DashboardNav />

      <Container fluid className="pt-5 mt-5 px-3 px-md-5">
        <Row>
          <Col md={3} className="mb-4 mb-md-0">
            <Sidebar />
          </Col>

          <Col md={9}>
            <h2 className="fw-bold text-success mb-4 text-center text-md-start">
              Transaction History
            </h2>

            {/* Optional Filter/Search */}
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <Row className="gy-3">
                  <Col md={6}>
                    <Form.Control type="text" placeholder="Search by description..." />
                  </Col>
                  <Col md={3}>
                    <Form.Select>
                      <option>All Types</option>
                      <option>Credit</option>
                      <option>Debit</option>
                    </Form.Select>
                  </Col>
                  <Col md={3}>
                    <Form.Control type="date" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Transaction Table */}
            <Card className="shadow-sm border-0">
              <Card.Body className="p-0">
                <Table responsive hover borderless className="mb-0 align-middle">
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
                        <tr key={index} style={{ backgroundColor: bgColor }} className="fw-semibold">
                          <td className="py-3">{txn.date}</td>
                          <td className="py-3">{txn.description}</td>
                          <td className="py-3">{txn.amount}</td>
                          <td className="py-3">{txn.type}</td>
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

export default Transaction;
