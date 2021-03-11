import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../stylesheets/AdsCard.css";
export default function AdsCard() {
  return (
    <Card className="my-3 ads-card">
      <Card.Img variant="top" src={require("../../imgs/homeHeader.png")} />

      <Card.Body>
        <Card.Title className="text-right">اعلان أثاث منزلى </Card.Title>

        <div className="display-inline-block pt-3">
          <div className="w-75">
            <p>
              <i class="fas fa-map-marker-alt"></i> دبى
            </p>
          </div>

          <div className="w-25 text-left">
            <Button className="down-btn ">
              <i class="fas fa-download px-2"></i>
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
