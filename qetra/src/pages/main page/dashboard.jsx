import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table, Card } from "react-bootstrap";
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
import SummaryCard from "../../components/section/summarycard";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [lastTransaction, setLastTransaction] = useState({});
  const [activeInvestment, setActiveInvestment] = useState(0);

  useEffect(() => {
    // Simulated API data
    const data = [
      { date: "2025-07-28", description: "Airtime Purchase", amount: -1000 },
      { date: "2025-07-27", description: "Wallet Funded", amount: 20000 },
      { date: "2025-07-25", description: "Transfer to John", amount: -5000 },
    ];

    setTransactions(data);
    setTotalBalance(500000);
    setActiveInvestment(300000);
    setLastTransaction(data[0]);
  }, []);

  const formatAmount = (amt) =>
    `${amt < 0 ? "-" : "+"}₦${Math.abs(amt).toLocaleString()}`;

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-NG", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

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
              Welcome back, Emmanuel 👋
            </h2>

            {/* Summary Cards */}
            <Row className="g-4">
              <SummaryCard
                title="Total Balance"
                icon={<FaWallet />}
                value={`₦${totalBalance.toLocaleString()}`}
              />
              <SummaryCard
                title="Last Transaction"
                icon={<FaExchangeAlt />}
                value={formatAmount(lastTransaction.amount || 0)}
              />
              <SummaryCard
                title="Investment"
                icon={<FaChartLine />}
                value={`₦${activeInvestment.toLocaleString()} Active`}
              />
            </Row>

            {/* Quick Actions */}
            <section className="mt-5">
              <h4 className="fw-bold text-success mb-3 text-center text-md-start">
                Quick Actions
              </h4>
              <Row className="g-3">
                <Col xs={12} sm={6} md={4}>
                  <Button variant="outline-success" className="w-100 fw-semibold d-flex justify-content-center gap-2">
                    <FaMoneyBillWave /> Fund Wallet
                  </Button>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Button variant="outline-success" className="w-100 fw-semibold d-flex justify-content-center gap-2">
                    <FaPaperPlane /> Transfer Money
                  </Button>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Button variant="outline-success" className="w-100 fw-semibold d-flex justify-content-center gap-2">
                    <FaPiggyBank /> Invest Now
                  </Button>
                </Col>
              </Row>
            </section>

            {/* Recent Transactions */}
            <section className="mt-5">
              <h4 className="fw-bold text-success mb-3 text-center text-md-start">
                Recent Transactions
              </h4>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-0">
                  <div style={{ maxHeight: "300px", overflowY: "auto" }}>
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
                        {transactions.map((txn, index) => (
                          <tr
                            key={index}
                            style={{
                              backgroundColor:
                                txn.amount < 0
                                  ? "rgba(220, 53, 69, 0.20)"
                                  : "rgba(25, 135, 84, 0.20)",
                            }}
                          >
                            <td className="py-3 fw-semibold">{formatDate(txn.date)}</td>
                            <td className="py-3 fw-semibold">{txn.description}</td>
                            <td className="py-3 fw-semibold">{formatAmount(txn.amount)}</td>
                            <td className="py-3 fw-semibold">{txn.amount < 0 ? "Debit" : "Credit"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Dashboard;
