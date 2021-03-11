import React from "react";
import BreadC from "../layouts/BreadC";
import { Container } from "react-bootstrap";
import AdsDetailsitem from "../ads/AdsDetailsitem";

import "../../stylesheets/AdsDetailsPage.css";

export default function AdsDetailsPage() {
  return (
    <div className="AdsDetailsPage py-5 mt-4">
      <BreadC />

      <Container>
        <div className="AdsDetailsItemholder py-5 px-3">
          <AdsDetailsitem />
        </div>
      </Container>
    </div>
  );
}
