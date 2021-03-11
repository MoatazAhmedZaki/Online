import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../stylesheets/AdsFilesSection.css";

export default function AdsFilesSection() {
  return (
    <div>
      <Container className="text-center py-5 AdsFilesSection">
        <h2>ملف الاعلانات كاملا</h2>

        <Row className="pt-5">
          <Col md={6} sm={12} className="mx-auto">
            <Row>
              <Col md={6} sm={12} className="mx-auto my-3">
                <Button className="downloadfile-btn p-3">
                  
                  <i class="far fa-eye px-2"></i>مشاهدة الملف
                </Button>
              </Col>

              <Col md={6} sm={12} className="mx-auto my-3">
                <Button className="viewfile-btn p-3">
                  
                  <i class="fas fa-download px-2"></i>تحميل الملف
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
}
