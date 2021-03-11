import React, { Component } from "react";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import "../../stylesheets/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="pt-3">
        <Container>
          <Row>
            <Col lg={2} md={2} sm={12} className="py-3 text-center">
              <h6>عدد الزوار</h6>
              <h6 className="number">15876</h6>
            </Col>
            <Col lg={2} md={2} sm={12} className="py-3">
              <h6>الموقع</h6>
              <p>من نحن</p>
              <p>الاسعار</p>
              <p>اتفاقية الاستخدام</p>
              <p>سياسة الخصوصية</p>
            </Col>

            <Col lg={2} md={2} sm={12} className="py-3">
              <h6> الاعلانات</h6>
              <p>الاقسام</p>
              <p>المناطق</p>
              <p>أضف اعلان</p>
            </Col>
            <Col lg={2} md={2} sm={12} className="py-3">
              <h6> المساعدة والدعم</h6>
              <p>مساعدة</p>
              <p>تواصل معنا</p>
            </Col>
            <Col lg={2} md={2} sm={12} className="py-3">
              <h6>اللغات</h6>
              <p>العربية</p>
              <p>English</p>
            </Col>
            <Col lg={2} md={2} sm={12} className="py-3">
              <h6 className="pb-3">تابعنا</h6>
              <p>
                {" "}
                <i class="fab fa-facebook px-1"></i>{" "}
                <i class="fab fa-twitter px-1"></i>{" "}
                <i class="fab fa-youtube px-1"></i>{" "}
                <i class="fab fa-instagram px-1"></i>
              </p>
            </Col>
          </Row>
        </Container>

        <p className="text-center py-3 small-footer " dir="ltr">
          <small> © online.2020, All Rights Reserved. </small>
        </p>
      </footer>
    );
  }
}
