import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  ProgressBar,
  Button,
  Form,
  Badge,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import {
  FaChartLine,
  FaMoneyBillWave,
  FaClock,
  FaEye,
  FaEyeSlash,
  FaCopy,
  FaWallet,
} from "react-icons/fa";
import DashboardNav from "../../components/section/dashboardnav";
import Sidebar from "../../components/section/sidebar";

ChartJS.register(BarElement, CategoryScale, LinearScale, ChartTooltip, Legend);

const Investment = () => {
  const investments = [
    {
      title: "Fixed Deposit",
      amount: 100000,
      returns: 110000,
      duration: "6 months",
      progress: 70,
      status: "Ongoing",
    },
    {
      title: "Mutual Funds",
      amount: 50000,
      returns: 60000,
      duration: "3 months",
      progress: 100,
      status: "Completed",
    },
    {
      title: "Real Estate",
      amount: 200000,
      returns: 240000,
      duration: "1 year",
      progress: 40,
      status: "Ongoing",
    },
  ];

  const totalInvestment = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const [filter, setFilter] = useState("All");
  const [showBalance, setShowBalance] = useState(true);
  const [showAccount, setShowAccount] = useState(true);
  const accountNumber = "1234567890";

  useEffect(() => {
    const storedVisibility = localStorage.getItem("showInvestmentBalance");
    const storedAccountVisibility = localStorage.getItem("showAccountNumber");
    if (storedVisibility !== null) setShowBalance(storedVisibility === "true");
    if (storedAccountVisibility !== null) setShowAccount(storedAccountVisibility === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("showInvestmentBalance", showBalance);
    localStorage.setItem("showAccountNumber", showAccount);
  }, [showBalance, showAccount]);

  const filteredInvestments =
    filter === "All" ? investments : investments.filter((inv) => inv.status === filter);

  const chartData = {
    labels: investments.map((inv) => inv.title),
    datasets: [
      {
        label: "Invested Amount (₦)",
        data: investments.map((inv) => inv.amount),
        backgroundColor: "#198754",
      },
      {
        label: "Expected Returns (₦)",
        data: investments.map((inv) => inv.returns),
        backgroundColor: "#0d6efd",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Account number copied!");
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
            <h2 className="fw-bold text-success mb-3 text-center text-md-start">
              My Investments
            </h2>

            {/* Investment Summary Section */}
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <div>
                  <h6 className="fw-semibold text-muted mb-1">Total Investment</h6>
                  <h3 className="text-success fw-bold d-flex align-items-center">
                    {showBalance ? `₦${totalInvestment.toLocaleString()}` : "••••••••"}
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => setShowBalance((prev) => !prev)}
                      className="ms-2 p-0 text-success"
                    >
                      {showBalance ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </h3>

                  <div className="d-flex align-items-center text-muted mt-1">
                    <span className="me-2">Account Number:</span>
                    <span className="fw-semibold">
                      {showAccount ? accountNumber : "••••••••"}
                    </span>
                    <Button
                      variant="link"
                      size="sm"
                      className="ms-2 p-0 text-success"
                      onClick={() => setShowAccount((prev) => !prev)}
                    >
                      {showAccount ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                    {showAccount && (
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Copy Account Number</Tooltip>}
                      >
                        <Button
                          variant="link"
                          size="sm"
                          className="ms-1 p-0 text-success"
                          onClick={copyToClipboard}
                        >
                          <FaCopy />
                        </Button>
                      </OverlayTrigger>
                    )}
                  </div>

                  <Link
                    to="/wallet"
                    className="btn btn-outline-success mt-3 d-inline-flex align-items-center"
                  >
                    <FaWallet className="me-2" />
                    Withdraw to Wallet
                  </Link>
                </div>

                <Link to="/Investnow" className="btn btn-success mt-3 mt-md-0">
                  Invest Now
                </Link>
              </Card.Body>
            </Card>

            {/* Chart Section */}
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-semibold mb-3">
                  <FaChartLine className="me-2 text-success" />
                  Investment Performance
                </h5>
                <Bar data={chartData} options={chartOptions} />
              </Card.Body>
            </Card>

            {/* Filter Dropdown */}
            <Row className="align-items-center mb-3">
              <Col md={4}>
                <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
                  <option value="All">All Investments</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                </Form.Select>
              </Col>
            </Row>

            {/* Investment Cards */}
            <Row className="g-4 mb-4">
              {filteredInvestments.map((item, index) => (
                <Col md={6} lg={4} key={index}>
                  <Card className="shadow-sm border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-bold text-success mb-2">{item.title}</h5>

                      <p className="d-flex align-items-center mb-3">
                        <FaMoneyBillWave className="me-2 text-muted" />
                        <strong>Amount:</strong> ₦{item.amount.toLocaleString()}
                      </p>
                      <p className="d-flex align-items-center mb-3">
                        <FaChartLine className="me-2 text-muted" />
                        <strong>Returns:</strong> ₦{item.returns.toLocaleString()}
                      </p>
                      <p className="d-flex align-items-center mb-3">
                        <FaClock className="me-2 text-muted" />
                        <strong>Duration:</strong> {item.duration}
                      </p>
                      <p className="mb-2">
                        <strong>Status: </strong>
                        <Badge bg={item.status === "Completed" ? "success" : "info"}>
                          {item.status}
                        </Badge>
                      </p>

                      <ProgressBar
                        now={item.progress}
                        label={`${item.progress}%`}
                        variant={item.status === "Completed" ? "success" : "info"}
                        className="mb-3"
                      />

                      <Button
                        variant="outline-success"
                        size="sm"
                        className="w-100"
                        disabled={item.status === "Completed"}
                      >
                        {item.status === "Completed" ? "Completed" : "View Details"}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Investment History Table */}
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-semibold mb-3 text-success text-center text-md-start">
                  Investment History
                </h5>
                <Table responsive hover bordered className="mb-0">
                  <thead className="table-success text-center">
                    <tr>
                      <th>Title</th>
                      <th>Amount</th>
                      <th>Returns</th>
                      <th>Duration</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {investments.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.title}</td>
                        <td>₦{item.amount.toLocaleString()}</td>
                        <td>₦{item.returns.toLocaleString()}</td>
                        <td>{item.duration}</td>
                        <td>
                          <Badge bg={item.status === "Completed" ? "success" : "info"}>
                            {item.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
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

export default Investment;
