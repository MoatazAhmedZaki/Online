import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "../../stylesheets/BreadC.css";

export default function BreadC() {
  return (
    <Breadcrumb className="myBreadcrumb">
      <Breadcrumb.Item href="#"> الرئيسية </Breadcrumb.Item>

      <Breadcrumb.Item active> خطط الاسعار </Breadcrumb.Item>
    </Breadcrumb>
  );
}
