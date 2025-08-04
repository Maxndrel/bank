import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaWallet,
  FaExchangeAlt,
  FaChartLine,
  FaMoneyBillWave,
  FaPaperPlane,
  FaPiggyBank,
  FaEye,
  FaEyeSlash,
  FaCopy,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import Sidebar from "../../components/section/sidebar";
import DashboardNav from "../../components/section/dashboardnav";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const Dashboard = () => {
    const transactions = [
    { date: "July 28, 2025", description: "Airtime Purchase", amount: "-₦1,000", type: "Debit" },
    { date: "July 27, 2025", description: "Wallet Funded", amount: "+₦20,000", type: "Credit" },
    { date: "July 25, 2025", description: "Transfer to John", amount: "-₦5,000", type: "Debit" },
  ];


  const investmentChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Investment Growth (₦)",
        data: [100000, 130000, 160000, 180000, 200000, 230000, 300000],
        fill: true,
        backgroundColor: "rgba(25, 135, 84, 0.1)",
        borderColor: "#198754",
        tension: 0.4,
      },
    ],
  };

  const investmentChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#198754",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#6c757d",
        },
      },
      x: {
        ticks: {
          color: "#6c757d",
        },
      },
    },
  };

  const [showTotal, setShowTotal] = useState(true);
  const [showInvestment, setShowInvestment] = useState(true);
  const [showAccountNo, setShowAccountNo] = useState(true);

  useEffect(() => {
    const savedTotal = localStorage.getItem("showTotalBalance");
    const savedInvestment = localStorage.getItem("showInvestmentBalance");
    const savedAccount = localStorage.getItem("showAccountNo");
    if (savedTotal !== null) setShowTotal(savedTotal === "true");
    if (savedInvestment !== null) setShowInvestment(savedInvestment === "true");
    if (savedAccount !== null) setShowAccountNo(savedAccount === "true");
  }, []);

  const toggleTotalBalance = () => {
    localStorage.setItem("showTotalBalance", (!showTotal).toString());
    setShowTotal((prev) => !prev);
  };

  const toggleInvestmentBalance = () => {
    localStorage.setItem("showInvestmentBalance", (!showInvestment).toString());
    setShowInvestment((prev) => !prev);
  };

  const toggleAccountNo = () => {
    const updated = !showAccountNo;
    localStorage.setItem("showAccountNo", updated.toString());
    setShowAccountNo(updated);
  };

  const copyAccountNo = () => {
    navigator.clipboard.writeText("0045600192");
    alert("Account number copied!");
  };

  return (
    <main className="bg-light min-vh-100">
      <DashboardNav />
      <Container fluid className="pt-5 mt-5 px-3 px-md-5">
        <Row>
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <Sidebar />
          </Col>
          <Col xs={12} md={9}>
            <div className="mb-4 text-center text-md-start">
              <h2 className="fw-bold text-success mb-1">Welcome back, Emmanuel 👋</h2>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <span className="text-muted fw-semibold">
                  Account No: {showAccountNo ? "0045600192" : "0•••••••92"}
                </span>
                <Button variant="link" className="p-0 text-success" onClick={toggleAccountNo}>
                  {showAccountNo ? <FaEyeSlash /> : <FaEye />}
                </Button>
                <Button variant="link" className="p-0 text-success" onClick={copyAccountNo}>
                  <FaCopy />
                </Button>
              </div>
            </div>

            {/* Summary Cards */}
            <Row className="g-4">
              <Col sm={12} md={4}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <FaWallet className="text-success fs-3 me-3" />
                      <div>
                        <Card.Title className="mb-0">Total Balance</Card.Title>
                        <h5 className="fw-bold mb-0">{showTotal ? "₦500,000" : "•••••••"}</h5>
                      </div>
                    </div>
                    <Button variant="light" className="border-0" onClick={toggleTotalBalance}>
                      {showTotal ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={4}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="d-flex align-items-center">
                    <FaExchangeAlt className="text-success fs-3 me-3" />
                    <div>
                      <Card.Title className="mb-0">Last Transaction</Card.Title>
                      <h6 className="fw-bold mb-0">₦15,000 Debit</h6>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={4}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <FaChartLine className="text-success fs-3 me-3" />
                      <div>
                        <Card.Title className="mb-0">Investment</Card.Title>
                        <h6 className="fw-bold mb-0">{showInvestment ? "₦300,000 Active" : "•••••••"}</h6>
                      </div>
                    </div>
                    <Button variant="light" className="border-0" onClick={toggleInvestmentBalance}>
                      {showInvestment ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Quick Actions */}
            <div className="mt-5">
              <h4 className="fw-bold text-success mb-3 text-center text-md-start">Quick Actions</h4>
              <Row className="g-3">
                <Col sm={12} md={4}>
                  <Link to="/Fund" className="btn btn-outline-success w-100 fw-semibold d-flex justify-content-center align-items-center gap-2">
                    <FaMoneyBillWave /> Fund Wallet
                  </Link>
                </Col>
                <Col sm={12} md={4}>
                  <Link to="/Transfer" className="btn btn-outline-success w-100 fw-semibold d-flex justify-content-center align-items-center gap-2">
                    <FaPaperPlane /> Transfer Money
                  </Link>
                </Col>
                <Col sm={12} md={4}>
                  <Link to="/Investnow" className="btn btn-outline-success w-100 fw-semibold d-flex justify-content-center align-items-center gap-2">
                    <FaPiggyBank /> Invest Now
                  </Link>
                </Col>
              </Row>
            </div>

            {/* Investment Chart */}
            <div className="mt-5">
              <h4 className="fw-bold text-success mb-3 text-center text-md-start">Investment Performance</h4>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Line data={investmentChartData} options={investmentChartOptions} />
                </Card.Body>
              </Card>
            </div>

            {/* Recent Transactions */}
            <h5 className="fw-bold text-success mb-3 text-center text-md-start">
              Wallet Transactions
            </h5>

            <Card className="shadow-sm border-0">
              <Card.Body className="p-0">
                {transactions.length > 0 ? (
                  <Table responsive hover className="mb-0 align-middle text-center">
                    <thead className="bg-success text-white">
                      <tr>
                        <th className="py-3">Date</th>
                        <th className="py-3">Description</th>
                        <th className="py-3">Amount</th>
                        <th className="py-3">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((txn, index) => {
                        const isCredit = txn.type === "Credit";
                        return (
                          <tr key={index} style={{ backgroundColor: isCredit ? "#e6f4ea" : "#fdeaea" }}>
                            <td className="py-3">{txn.date}</td>
                            <td className="py-3">{txn.description}</td>
                            <td className="py-3 fw-bold">{txn.amount}</td>
                            <td className="py-3">
                              <Badge bg={isCredit ? "success" : "danger"}>{txn.type}</Badge>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  <div className="p-4 text-center text-muted">
                    <p>No transactions available yet.</p>
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

export default Dashboard;
