import React, { Component } from "react";
import { Form, Row, Button, Container } from "react-bootstrap";
import "../../stylesheets/Addads.css";

export default class AddAds extends Component {
  render() {
    return (
      <div className="SignIn-form text-center">
        <Container>
          <Form className="py-4  text-right mx-auto">
            <div className="my-3 text-center">
              <label class="myLabel mx-auto ">
                <input type="file" required className="mx-auto" />
                <span>
                  {" "}
                  <i class="fas fa-camera fa-2x"></i>
                </span>
              </label>
            </div>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder=" اسم الاعلان" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>{" "}
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>{" "}
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="لينك الاعلان " />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control as="textarea" placeholder="الوصف  " rows="3" />
            </Form.Group>

            <Row>
              <Button className="signin-btn py-2 w-100 mx-auto mt-3">
                حفظ
              </Button>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}
