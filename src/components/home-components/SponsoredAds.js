import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function SponsoredAds() {
  return (
    <Container className="py-5">
      <Col lg={9} md={12} sm={12} className="mx-auto text-center my-2">
        <Row>
          <Col sm={2} className="mx-auto text-center my-2">
            <img
              className="img-fluid h-100 "
              src={require("../../imgs/ads3.png")}
              alt="First slide"
            />
          </Col>
          <Col sm={8} className="mx-auto text-center my-2">
            <img
              className="img-fluid h-100 "
              src={require("../../imgs/ads2.png")}
              alt="First slide"
            />
          </Col>

          <Col sm={2} className="mx-auto text-center my-2">
            {" "}
            <img
              className="img-fluid h-100 "
              src={require("../../imgs/ads1.png")}
              alt="First slide"
            />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
