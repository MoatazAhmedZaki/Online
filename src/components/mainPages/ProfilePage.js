import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Tab,
  Media,
  Button,
} from "react-bootstrap";
import "../../stylesheets/ProfilePage.css";
import AccountSettings from "../profile/AccountSettings";
import AccoutAds from "../profile/AccoutAds";

export default class ProfilePage extends Component {
  componentWillMount(){

    window.scrollTo(0,0)

  }
  render() {
    return (
      <div className="ProfilePage pt-5">
        <Container>
          <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={4} className="setting-holder1 setting-holder p-0 mb-4 ">

                  <Media className="px-4 pt-4">
                    <Button className="upload-btn rounded-circle">
                      <i class="fas fa-camera"></i>
                    </Button>
                    <img
                      width={64}
                      height={64}
                      className="ml-3 rounded-circle "
                      src={require("../../imgs/homeHeader.png")}
                      alt="Generic placeholder"
                    />
                    <Media.Body className="text-right">
                      <h5 className="profile-name">قاسم الماجدى </h5>
                      <Button className="logout-btn">خروج</Button>
                      <div className="display-inline-block">
                        <div className="w-75 pl-3">
                          <p className="plan-type"> الباقة الاساسية </p>
                        </div>
                        <div className="w-25">
                          <Button className="upgd-btn">ترقية</Button>
                        </div>
                      </div>
                    </Media.Body>
                  </Media>
                  <hr />

                  <Nav variant="pills" className="flex-column  text-right">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        {" "}
                        <i class="far fa-user-circle"></i> حسابى{" "}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        {" "}
                        <i class="fas fa-volume-up"></i> اعلاناتى
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                </Col>
                <Col sm={8} className="mb-4">
                  <Tab.Content className="text-right setting-holder  py-4 container">
                    <Tab.Pane eventKey="first">
                      <AccountSettings />{" "}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <AccoutAds />{" "}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Container>
      </div>
    );
  }
}
