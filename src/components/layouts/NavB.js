import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink} from "react-router-dom";

// import {Link} from "react-router-dom"

import { connect } from "react-redux";
import { changeLang } from "../../store/actions/changeLang";

import "../../stylesheets/NavB.css";

const text = require("../../localization/NavB.json");

class NavB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "text.AR",
    };
  }

  changeLang = (e) => {
    e.preventDefault();
    if (e.target.id === "AR") {
      this.setState({ text: text.AR });
    } else if (e.target.id === "EN") {
      this.setState({ text: text.EN });
    }
    this.props.changeLang(e.target.id);
  };

  componentWillMount() {
    if (this.props.lan === "AR") {
      this.setState({ text: text.AR });
    } else {
      this.setState({ text: text.EN });
    }
  }

  render() {
    return (
      <Navbar
        bg="light"
        expand="lg"
        className={
          "" + (this.state.text === text.EN ? "text-right" : "text-left")
        }
      >
        <Container>
          <NavLink className="mx-4 my-2 mx-4 my-2 navbar-brand" exact to="/">
            <img
              src={require("../../imgs/Logo.png")}
              alt=" aelanat Logo"
              className="img-fluid"
            />{" "}
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className={
                " " + (this.state.text === text.EN ? "mr-auto" : "ml-auto")
              }
            >
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeStyle={{
                  color: "rgb(54, 49, 204)",
                }}
              >
                {this.state.text.HomeLink}
              </NavLink>
              <NavLink
                className="nav-link"
                exact
                to="/PricePlan"
                activeStyle={{
                  color: "rgb(54, 49, 204)",
                }}
              >
                {this.state.text.PriceLink}
              </NavLink>

              <NavLink
                className="nav-link"
                exact
                to="/AboutUs"
                activeStyle={{
                  color: "rgb(54, 49, 204)",
                }}
              >
                {this.state.text.AboutLink}
              </NavLink>

              <NavLink
                className="nav-link"
                exact
                to="/ContactUs"
                activeStyle={{
                  color: "rgb(54, 49, 204)",
                }}
              >
                {this.state.text.ContactLink}
              </NavLink>
            </Nav>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            <Nav
              className={
                "" + (this.state.text === text.EN ? "ml-auto" : "mr-auto")
              }
            >
              <NavLink
                className={
                  "add-ads-btn p-2 " +
                  (this.state.text === text.EN ? "ml-auto" : "mr-auto")
                }
                exact
                to="/AddAds"
              >
                {this.state.text.AddAds}
              </NavLink>
              <NavLink className="nav-link" exact to="/SignIn">
                <i class="far fa-user pr-3 pl-2"></i>
                {this.state.text.Login}
              </NavLink>

              {this.props.lan === "EN" ? (
                <a href="/" id="AR" className="nav-link" onClick={this.changeLang}>
                  عربي
                </a>
              ) : (
                <a href="/" id="EN" className="nav-link" onClick={this.changeLang}>
                  EN
                </a>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  // console.log("ownprops");

  // console.log(ownprops);
  return {
    lan: state.lan,
    // posts:state.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (lan) => {
      dispatch(changeLang(lan));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavB);
