import React, { Component } from "react";
import { Form, Row, Button, Col } from "react-bootstrap";

export default class Payment extends Component {
  render() {
    return (
      <div className="SignIn-form text-center">
        <div className="pt-4">
          <p className="form-title-underline"> الدفع الالكترونى </p>
          <hr />
        </div>

        <Form className="py-4  text-right w-75 mx-auto">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="px-3"> بطاقة الائتمان</Form.Label>
            <Form.Control type="email" placeholder="رقم الكارت" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="px-3"> كود الأمان </Form.Label>
            <Form.Control type="email" placeholder="رقم الكارت" />
          </Form.Group>

          <Form.Label className="px-3"> تاريخ الصلاحية </Form.Label>

          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>{" "}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>{" "}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Button className="signin-btn py-2 w-100 mx-auto mt-3">
              اشترك ف الباقة
            </Button>
          </Row>
        </Form>

        <div className="display-inline-block  py-4">
          <div className="w-25 text-center">
            {" "}
            <img
              className="img-fluid h-100 "
              src={require("../../imgs/mastercard.png")}
              alt="First slide"
            />
          </div>

          <div className="w-25 text-center">
            {" "}
            <img
              className="img-fluid h-100 "
              src={require("../../imgs/visa.png")}
              alt="First slide"
            />
          </div>

          <div className="w-25 text-center">
            {" "}
            <img
              className="img-fluid h-100 "
              src={require("../../imgs/american-express.png")}
              alt="First slide"
            />
          </div>

          <div className="w-25 text-center">
            {" "}
            <img
              className="img-fluid h-100  "
              src={require("../../imgs/diners-club.png")}
              alt="First slide"
            />
          </div>
        </div>
      </div>
    );
  }
}
