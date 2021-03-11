import React, { Component } from "react";
import {
  Row,
  Col,
  Nav,
  Tab,
} from "react-bootstrap";
import AdsHistoryItem from "./AdsHistoryItem";
import "../../stylesheets/AccoutAds.css";

export default class AccoutAds extends Component {
  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={12} className="ads-nav">
              <Nav variant="pills" className=" justify-content-start">
                <Nav.Item>
                  <Nav.Link eventKey="first" >
                    اعلانات سابقة{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" >
                    اعلانات حالية{" "}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <hr className="mt-0" />
            </Col>
            <Tab.Content className="w-100">
              <Tab.Pane eventKey="first">
                <AdsHistoryItem />
                <AdsHistoryItem />

                <AdsHistoryItem />

                <AdsHistoryItem />

                {/* <SignIn /> */}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <AdsHistoryItem />

                <AdsHistoryItem />

                <AdsHistoryItem />

                {/* <SignUp/>       */}
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
