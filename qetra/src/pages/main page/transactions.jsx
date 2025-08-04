import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  Badge,
  InputGroup,
} from "react-bootstrap";
import DashboardNav from "../../components/section/dashboardnav";
import Sidebar from "../../components/section/sidebar";

const Transaction = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const transactions = [
  { date: "August 3, 2025", description: "POS Payment - Shoprite", amount: "-₦7,200", type: "Debit" },
  { date: "August 2, 2025", description: "Wallet Fund", amount: "+₦30,000", type: "Credit" },
  { date: "August 1, 2025", description: "Electricity Bill", amount: "-₦12,000", type: "Debit" },
  { date: "July 30, 2025", description: "Airtime Recharge - MTN", amount: "-₦1,000", type: "Debit" },
  { date: "July 29, 2025", description: "Transfer from Sarah", amount: "+₦25,000", type: "Credit" },
  { date: "July 28, 2025", description: "Utility Payment", amount: "-₦10,000", type: "Debit" },
  { date: "July 27, 2025", description: "Salary Credit", amount: "+₦150,000", type: "Credit" },
  { date: "July 26, 2025", description: "Netflix Subscription", amount: "-₦5,000", type: "Debit" },
  { date: "July 25, 2025", description: "Data Subscription - Glo", amount: "-₦2,000", type: "Debit" },
  { date: "July 24, 2025", description: "Wallet Fund", amount: "+₦50,000", type: "Credit" },
  { date: "July 22, 2025", description: "Transfer to John", amount: "-₦8,500", type: "Debit" },
  { date: "July 21, 2025", description: "Betting Winnings", amount: "+₦10,000", type: "Credit" },
  { date: "July 20, 2025", description: "DSTV Payment", amount: "-₦9,500", type: "Debit" },
  { date: "July 19, 2025", description: "Received from Dapo", amount: "+₦12,000", type: "Credit" },
];


  // Apply filters
  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch = txn.description.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === "All Types" || txn.type === typeFilter;
    return matchesSearch && matchesType;
  });

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

            {/* Search & Filters */}
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <Row className="gy-3 align-items-center">
                  <Col md={6}>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Search by description..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </InputGroup>
                  </Col>
                  <Col md={3}>
                    <Form.Select
                      value={typeFilter}
                      onChange={(e) => setTypeFilter(e.target.value)}
                    >
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
                {filteredTransactions.length > 0 ? (
                  <Table responsive hover borderless className="mb-0 align-middle text-center">
                    <thead className="bg-success text-white">
                      <tr>
                        <th className="py-3">Date</th>
                        <th className="py-3">Description</th>
                        <th className="py-3">Amount</th>
                        <th className="py-3">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTransactions.map((txn, index) => (
                        <tr
                          key={index}
                          className="fw-semibold"
                          style={{
                            backgroundColor:
                              txn.type === "Credit" ? "#e6f4ea" : "#fdeaea",
                          }}
                        >
                          <td className="py-3">{txn.date}</td>
                          <td className="py-3">{txn.description}</td>
                          <td className="py-3">{txn.amount}</td>
                          <td className="py-3">
                            <Badge bg={txn.type === "Credit" ? "success" : "danger"}>
                              {txn.type}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <div className="p-4 text-center text-muted">
                    No matching transactions found.
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Transaction;
