import React from "react";
import { Card } from "react-bootstrap";

const SummaryCard = ({ title, icon, value }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <Card className="shadow-sm border-0 h-100">
        <Card.Body>
          <div className="d-flex align-items-center">
            <div className="me-3 text-success fs-3">{icon}</div>
            <div>
              <Card.Title className="mb-0">{title}</Card.Title>
              <h6 className="fw-bold">{value}</h6>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SummaryCard;
