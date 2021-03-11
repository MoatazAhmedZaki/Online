import React, { Component } from "react";

import { Col, Container, Nav } from "react-bootstrap";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import "../../stylesheets/SignInPage.css";
import BreadC from "../layouts/BreadC";
import VerifyCode from "../Auth/VerifyCode";
import ForgetPass from "../Auth/ForgetPass";

export default class SingInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { Signin: true, Signup: false, submit: false, forget: false };
  }
  componentWillMount(){

    window.scrollTo(0,0)

  }

  showSignIn = () => {
    this.setState({ Signin: true, Signup: false });
  };
  showSignUp = () => {
    this.setState({ Signin: false, Signup: true });
  };

  handleSubmit = () => {
    this.setState({ submit: true });
  };

  handleForget = () => {
    this.setState({ forget: true });
  };

  render() {
    return (
      <section className="SingInPage ">
        <BreadC />
        <Container className="py-5">
          {this.state.submit ? (
            <Col md={6} sm={12} className="mx-auto py-3 sign-card">
              <VerifyCode />
            </Col>
          ) : this.state.forget ? (
            <Col md={6} sm={12} className="mx-auto py-3 sign-card">
              <ForgetPass />
            </Col>
          ) : (
            <Col md={6} sm={12} className="mx-auto pt-3 sign-card">
              {/* <Row>
                <Col sm={6} className="  text-center px-0">
                  <p
                    className={"navtab " + (this.state.Signin ? "active" : "")}
                    onClick={this.showSignIn}
                  >
                    تسجيل الدخول
                  </p>
                </Col>
                <Col sm={6} className="  text-center  px-0">
                  <p
                    className={"navtab  " + (this.state.Signup ? "active" : "")}
                    onClick={this.showSignUp}
                  >
                    مستخدم جديد
                  </p>
                </Col>
              </Row> */}

              <Nav className=" justify-content-around" activeKey="/home">
                <Nav.Item>
                  <p
                    className={
                      "navtab  mb-0 " + (this.state.Signin ? "active" : "")
                    }
                    onClick={this.showSignIn}
                  >
                    تسجيل الدخول
                  </p>
                </Nav.Item>
                <Nav.Item>
                  <p
                    className={
                      "navtab  mb-0 " + (this.state.Signup ? "active" : "")
                    }
                    onClick={this.showSignUp}
                  >
                    مستخدم جديد
                  </p>{" "}
                </Nav.Item>
              </Nav>
              <hr className="mt-0" />

              {this.state.Signin ? (
                <Container className="py-4">
                  <SignIn forget={this.handleForget} />
                </Container>
              ) : null}

              {this.state.Signup ? (
                <Container className="py-4">
                  <SignUp submit={this.handleSubmit} />
                </Container>
              ) : null}
            </Col>
          )}
        </Container>
      </section>
    );
  }
}
