import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";
//   import "../../stylesheets/SignIn.css";
import "../../stylesheets/VerifyCode.css";

export default class VerifyCode extends Component {
  render() {
    return (
      <div className="SignIn-form text-center">
        <div className="pt-4">
          <p className="form-title-underline"> تفعيل الحساب </p>
          <hr />

          <p className="w-50 mx-auto pt-3">
            برجاء كتابة كود التفعيل المرسل الى بريدك الالكترونى
          </p>
        </div>

        <Form inline className="py-4">
          <Form.Control className="" id="inlineFormInputName2" placeholder="" />
          <Form.Control className="" id="inlineFormInputName2" placeholder="" />
          <Form.Control className="" id="inlineFormInputName2" placeholder="" />
          <Form.Control className="" id="inlineFormInputName2" placeholder="" />
        </Form>

        <p className="text-right mb-0">
          <small className="px-1 forget-btn ">
            {" "}
            لم يتم ارسال كود التفعيل ؟
          </small>
        </p>

        <p className="text-right">
          <small className="px-1 resend-btn ">اعادة ارسال </small>
        </p>

        <Row>
          <Button className="signin-btn py-2 w-75 mx-auto mt-3">تفعيل</Button>
        </Row>
      </div>
    );
  }
}
