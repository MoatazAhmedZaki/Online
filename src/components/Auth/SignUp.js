import React, { Component } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "../../stylesheets/SignIn.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false, submit: true };
  }

  handleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleSubmit = () => {
    // this.setState({ submit: false });

    this.props.submit();
  };

  render() {
    return (
      <Form className="SignIn-form text-center">
        <div className="pb-3">
          <p>سجل عن طريق</p>
          <Row>
            <Col md={6} sm={12} className="mx-auto  ">
              <Button className="mx-auto my-2 twitter-btn">
                <i class="fab fa-twitter"></i>{" "}
              </Button>
            </Col>

            <Col md={6} sm={12} className="mx-auto">
              <Button className="mx-auto mt-2 mb-3 google-btn">
                <i class="fab fa-google"></i>{" "}
              </Button>
            </Col>
          </Row>
          <hr className="or-hr " />
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <i class="fas fa-user"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            size="lg"
            placeholder="رقم الموبيل  او البريد الالكترونى"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <i class="fas fa-envelope"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            size="lg"
            placeholder="رقم الموبيل  او البريد الالكترونى"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i class="fas fa-lock"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>

          {this.state.showPassword ? (
            <FormControl size="lg" type="text" placeholder=" كلمة المرور" />
          ) : (
            <FormControl size="lg" type="password" placeholder=" كلمة المرور" />
          )}

          <InputGroup.Append>
            <InputGroup.Text
              onClick={this.handleShowPassword}
              className="pass-btn"
            >
              <i class="far fa-eye px-2"></i>
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <Row>
          <Button
            onClick={this.handleSubmit}
            className="signin-btn py-2 w-75 mx-auto"
          >
            تسجيل
          </Button>
        </Row>
      </Form>
    );
  }
}
