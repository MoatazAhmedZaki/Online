import React, { Component } from "react";
import "../../stylesheets/VerifyCode.css";

import { Form, Button, Row } from "react-bootstrap";
export default class ForgetPass extends Component {
  render() {
    return (
      <div className="SignIn-form text-center">
        <div className="pt-4">
          <p className="form-title-underline"> نسيت كلمة المرور </p>
          <hr />

          <p className="w-50 mx-auto pt-3">
            {" "}
            برجاء كتابة رقم الموبيل او البريد الالكترونى لاستعادة حسابك وسيتم
            ارسال كود الى هاتفك او بريدك لاسترجاع حسابك{" "}
          </p>
        </div>

        <Form className="py-4 ">
          <Form.Control
            size="lg"
            className=" mx-5 mx-auto"
            id="inlineFormInputName2"
            placeholder="رقم الموبيل او البريد الالكترونى"
          />

          <Row>
            <Button className="signin-btn py-2 w-75 mx-auto mt-3">ارسال</Button>
          </Row>
        </Form>
      </div>
    );
  }
}
