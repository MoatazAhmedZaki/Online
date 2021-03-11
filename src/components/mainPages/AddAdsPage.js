import React from "react";
import BreadC from "../layouts/BreadC";
import { Container, Col } from "react-bootstrap";

import AddAds from "../Auth/AddAds.js";

export default function AddAdsPage() {
  return (
    <section className="SingInPage pt-4">
      <BreadC />
      <Container className="py-5">
        <Col md={6} sm={12} className="mx-auto pt-3 sign-card">
          <AddAds />
        </Col>
      </Container>
    </section>
  );
}
