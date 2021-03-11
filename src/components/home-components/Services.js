import React from "react";
import { Container, Media, Col, Row } from "react-bootstrap";
import "../../stylesheets/Services.css";

export default function Services() {
  return (
    <Container className="text-right py-5 Services">
      <Row>
        <Col lg={3} md={6} sm={6} className="mx-auto my-2 ">
          <Media
            className="carditem p-3"
          >
            <div className="blue-serv-bg p-1">
              <img
                //   width={64}
                //   height={64}
                //   className="ml-3"
                src={require("../../imgs/house.png")}
                alt="Generic placeholder"
              />
            </div>
            <Media.Body className="px-2">
              <h5>طلبات اعلانات</h5>
              <h5>القطاع الحكومى </h5>
            </Media.Body>
          </Media>
        </Col>
        <Col lg={3} md={6} sm={6} className="mx-auto my-2 ">
          <Media
            className="carditem p-3
"
          >
            <div className="blue-serv-bg p-1">
              <img
                //   width={64}
                //   height={64}
                //   className="ml-3"
                src={require("../../imgs/company.png")}
                alt="Generic placeholder"
              />
            </div>
            <Media.Body className="px-2">
              <p>طلبات اعلانات</p>
              <h5>القطاع التجارى</h5>
            </Media.Body>
          </Media>
        </Col>
        <Col lg={3} md={6} sm={6} className="mx-auto my-2 ">
          <Media
            className="carditem p-3
"
          >
            <div className="blue-serv-bg p-1">
              <img
                //   width={64}
                //   height={64}
                //   className="ml-3"
                src={require("../../imgs/megaphone.png")}
                alt="Generic placeholder"
              />
            </div>
            <Media.Body className="px-2">
              <p>طلبات اعلانات</p>
              <h5>المجانية</h5>
            </Media.Body>
          </Media>
        </Col>
        <Col lg={3} md={6} sm={6} className="mx-auto my-2 ">
          <Media
            className="carditem p-3
"
          >
            <div className="blue-serv-bg p-1">
              <img
                //   width={64}
                //   height={64}
                //   className="ml-3"
                src={require("../../imgs/document.png")}
                alt="Generic placeholder"
              />
            </div>
            <Media.Body className="px-2">
              <p> طلبات لأكثر</p>
              <h5>من اعلان</h5>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Container>
  );
}
